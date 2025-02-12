import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { ColumnType, BoardType, CardType } from "../../../apis/mock-data";
import mapOrder from "../../../utils/sort";
import cloneDeep from "lodash/cloneDeep";
import {
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import Card from "./ListColumns/Columns/ListCards/Card/card";
import Columns from "./ListColumns/Columns/columns";
import { CSS } from "@dnd-kit/utilities";
import {
  DragStartEvent,
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
const TYPE = {
  COLUMN: "column",
  CARD: "card",
};
function BoardContent({ boards }: { boards?: BoardType }) {
  // Yêu cầu chuột di chuyển 10 pixel trước khi kích hoạt
  // const poiterSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });
  const dropAnimation: DropAnimation = {
    keyframes({ transform }) {
      return [
        { transform: CSS.Transform.toString(transform.initial) },
        {
          transform: CSS.Transform.toString({
            ...transform.final,
            scaleX: 0.94,
            scaleY: 0.94,
          }),
        },
      ];
    },
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  const [activeDragItemData, setActiveDragItemData] = useState<
    CardType | null | ColumnType
  >(null);
  const [activeDragItemType, setActiveDragItemType] =
    useState<UniqueIdentifier | null>(null);
  const [activeDragItemId, setactiveDragItemId] =
    useState<UniqueIdentifier | null>(null);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  // Độ trễ nhấn là 250ms, với dung sai chuyển động là 5px
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  /// Ưu tiên sử dụng mouseSensor và touchSensor để có trải nghiện trên mobile tốt nhất
  const sensors = useSensors(mouseSensor, touchSensor);
  const [orderedColumn, setOrderedColumn] = useState<ColumnType[]>([]);
  useEffect(() => {
    setOrderedColumn(
      mapOrder<ColumnType>(boards?.columns, boards?.columnOrderIds, "_id")
    );
  }, [boards]);
  /// Tìm 1 column theo cardid
  const findColumnByCardId = (cardId: string): ColumnType | undefined => {
    /// Đoạn này cần lưu ý, nên dùng c.cards thay vì dùng c.cardOderIds bởi vì ở bước handleDragOver chúng ta sẽ làm dữ liệu cho cards hoàn chỉnh trước rồi mới tạo cardsOrderIds
    return orderedColumn.find((column) => {
      return column?.cards?.map((card) => card._id)?.includes(cardId);
    });
  };
  /// Bắt đầu kéo
  const handleDragStart = (e: DragStartEvent) => {
    setactiveDragItemId(e?.active?.id as string);
    setActiveDragItemType(
      e?.active?.data?.current?.columnId ? TYPE.CARD : TYPE.COLUMN
    );
    const data: CardType | ColumnType | null | undefined = e?.active?.data
      ?.current as CardType | ColumnType | null;
    setActiveDragItemData(data!);
  };
  /// DI chuyển giữa các phần tử
  const handleDragOver = (e: DragOverEvent) => {
    // console.log(e);
    if (activeDragItemType === TYPE.COLUMN) return;
    const { active, over } = e;
    if (!active || !over) return; // vị trí không hợp lệ dừng chương trình
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    const { id: overCardId } = over;
    /// Tìm 2 column theo CardId
    const activeColumn = findColumnByCardId(activeDraggingCardId as string);
    const overColumn = findColumnByCardId(overCardId as string);
    if (!activeColumn || !overColumn) return;
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumn((prevColumn) => {
        /// tìm vị trí index của overCard trong column đích(vị trí sắp đc thả)
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        const newCardIndex: number =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn.cards.length + 1;
        const nextColumns = cloneDeep([...prevColumn]);
        const nextActiveColumn = nextColumns.find(
          (column: ColumnType) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column: ColumnType) => column._id === overColumn._id
        );
        if (nextActiveColumn) {
          /// Xóa card này khỏi column cũ
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card: CardType) => card._id !== activeDraggingCardId
          );
          /// Cập nhật lại mảng cardOrderIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card: CardType) => card._id
          );
        }
        if (nextOverColumn) {
          /// Kiểm tra card đang kéo nó có tồn tại ở overColumn chưa nếu có thì cần xóa nó trước
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card: CardType) => card._id !== activeDraggingCardId
          );
          // thêm card đang kéo vào overColumn theo vị trí mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );
          /// Cập nhật lại mảng cardOrderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card: CardType) => card._id
          );
        }
        return nextColumns;
      });
    }
  };

  /// Kết thúc kéo(thả)
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return; // vị trí không hợp lệ dừng chuogw trình
    if (active.id !== over.id) {
      /// Lấy vị trí cũ từ thằng active
      const oldIndex = orderedColumn.findIndex(
        (item) => item._id === active.id
      );
      /// Lấy vị trí mới từ thằng overs
      const newIndex = orderedColumn.findIndex((item) => item._id === over.id);
      const dndOrderedColumn = arrayMove(orderedColumn, oldIndex, newIndex); /// Một hàm từ @dnd-kit/sortable giúp thay đổi vị trí phần tử trong mảng.
      /// cập nhật lại sau khi kéo thả
      setOrderedColumn(dndOrderedColumn);
    }
  };
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.boardBarContentHeight,
          width: "100%",
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#34495e" : "#3498db";
          },
        }}
      >
        <ListColumns columns={orderedColumn} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === TYPE.COLUMN && (
            <Columns column={activeDragItemData as ColumnType} />
          )}
          {activeDragItemType === TYPE.CARD && (
            <Card card={activeDragItemData as CardType} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
