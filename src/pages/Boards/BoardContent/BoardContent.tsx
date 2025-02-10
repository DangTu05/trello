import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { ColumnType, BoardType } from "../../../apis/mock-data";
import mapOrder from "../../../utils/sort";
function BoardContent({ boards }: { boards?: BoardType }) {
  const orderedBoards = mapOrder<ColumnType>(
    boards?.columns,
    boards?.columnOrderIds,
    "_id"
  );
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardBarContentHeight,
        width: "100%",
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#3498db";
        },
      }}
    >
      <ListColumns columns={orderedBoards} />
    </Box>
  );
}

export default BoardContent;
