import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { ColumnType, BoardType } from "../../../apis/mock-data";
import mapOrder from "../../../utils/sort";
import {
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

function BoardContent({ boards }: { boards?: BoardType }) {
  // Yêu cầu chuột di chuyển 10 pixel trước khi kích hoạt
  // const poiterSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });
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
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
      </Box>
    </DndContext>
  );
}

export default BoardContent;
