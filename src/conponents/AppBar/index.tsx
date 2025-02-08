import {
  Badge,
  Box,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
function AppBar() {
  const [searchValue, setSearchValue] = React.useState("");
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
        borderBottom: "1px solid silver",
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#2c3e50" : "#3498db";
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SvgIcon
            sx={{ color: "white" }}
            component={TrelloIcon}
            inheritViewBox={true}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "white",
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
          <Button
            startIcon={<AddToPhotosIcon />}
            sx={{ color: "white"}}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          placeholder="Search..."
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            "& label": {
              color: "white",
            },
            "& input": {
              color: "white",
            },
            "& lable.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "& .Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon
                    sx={{
                      color: searchValue ? "white" : "transparent",
                      cursor: "pointer",
                      fontSize: "small",
                    }}
                    onClick={() => setSearchValue("")}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
        <SelectMode />
        <Tooltip title="Notifications">
          <Badge color="warning" sx={{ cursor: "pointer" }} variant="dot">
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
