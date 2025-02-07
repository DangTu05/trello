import { Box } from "@mui/material";
function Board() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trello.boardBarHeight,
        width: "100%",
        backgroundColor: "secondary.light",
      }}
    >
      Board Bar
    </Box>
  );
}

export default Board;
