import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
function BoardContent() {
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
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
