import { Box } from "@mui/material";
import SelectMode from "../SelectMode/index";
function AppBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trello.appBarHeight,
        width: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <SelectMode />
    </Box>
  );
}

export default AppBar;
