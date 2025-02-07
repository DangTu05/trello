import { Box, Button, Chip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatars from "./avatars";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLE = {
  color: "secondary.light",
  padding: "5px",
  border: "none",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "& .MuiSvgIcon-root": {
    color: "secondary.light",
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
          color="secondary"
          startIcon={<PersonAddIcon />}
          variant="outlined"
        >
          Invite
        </Button>
        <Avatars />
      </Box>
    </Box>
  );
}

export default Board;
