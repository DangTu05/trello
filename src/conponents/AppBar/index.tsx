import { Badge, Box, TextField, Tooltip, Typography } from "@mui/material";
import SelectMode from "../SelectMode/index";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import TrelloIcon from "~/assets/mdi--trello.svg?react";
import Workspaces from "./Menus/workspace";
import Recent from "./Menus/recent";
import Templates from "./Menus/templates";
import Starred from "./Menus/starred";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/profiles";
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trello.appBarHeight,
        width: "100%",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderBottom: "2px solid  rgb(71, 157, 149)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "secondary.light" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SvgIcon
            sx={{ color: "secondary.light" }}
            component={TrelloIcon}
            inheritViewBox={true}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "secondary.light",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button color="secondary" variant="outlined">
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ minWidth: 120 }}
        />
        <SelectMode />
        <Tooltip title="Notifications">
          <Badge sx={{ color: "secondary.light" }} variant="dot">
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "secondary.light" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
