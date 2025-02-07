import { Box } from "@mui/material";
function BoardContent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        width: "100%",
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#3498db";
        },
      }}
    >
      Content
    </Box>
  );
}

export default BoardContent;
