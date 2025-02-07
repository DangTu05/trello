import { Box, Button, Chip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatars from "./avatars";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLE = {
  color: "white",
  padding: "5px",
  border: "none",
  backgroundColor: "transparent",
  borderRadius: "5px",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
};
function Board() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trello.boardBarHeight,
        width: "100%",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#3498db";
        },
        borderBottom: "1px solid silver",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, px: 2 }}>
        <Chip
          clickable
          icon={<DashboardIcon />}
          label="Đặng Quang Tú"
          variant="outlined"
          sx={MENU_STYLE}
        />
        <Chip
          clickable
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          variant="outlined"
          sx={MENU_STYLE}
        />
        <Chip
          clickable
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          variant="outlined"
          sx={MENU_STYLE}
        />
        <Chip
          clickable
          icon={<AutoFixNormalIcon />}
          label="Automation"
          variant="outlined"
          sx={MENU_STYLE}
        />
        <Chip
          clickable
          icon={<FilterListIcon />}
          label="Filter"
          variant="outlined"
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <Avatars />
      </Box>
    </Box>
  );
}

export default Board;
