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
        backgroundColor: "secondary.light",
      }}
    >
      {" "}
      Content
    </Box>
  );
}

export default BoardContent;
