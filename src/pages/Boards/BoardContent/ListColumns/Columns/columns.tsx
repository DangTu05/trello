import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import Tooltip from "@mui/material/Tooltip";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import AddCardIcon from "@mui/icons-material/AddCard";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import ListCards from "./ListCards/ListCards";
import { ColumnType, CardType } from "../../../../../apis/mock-data";
import mapOrder from "../../../../../utils/sort";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Hook như useState chỉ được phép gọi bên trong React component (bắt đầu bằng chữ in hoa) hoặc custom hook (bắt đầu bằng use).
function Columns({ column }: { column?: ColumnType }) {
  const orderedCards = mapOrder<CardType>(
    column?.cards,
    column?.cardOrderIds,
    "_id"
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column?._id || "", data: { ...column } });

  const styleColumn = {
    touchAction: "none", /// Dành cho sersor default dạng poitersensor
    /// Nếu sử dụng Css.Transform như đọc sẽ lỗi kiểu stretch
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  };
  return (
    <div ref={setNodeRef} style={styleColumn} {...attributes}>
      <Box
        {...listeners}
        sx={{
          maxWidth: "250px",
          minWidth: "250px",
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#7f8c8d" : "#ebecf0";
          },
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(5)})`,
        }}
      >
        {/* Header  */}
        <Box
          sx={{
            display: "flex",
            p: 2,
            justifyContent: "space-between",
            alignItems: "center",
            height: (theme) => theme.trello.headerHeight,
          }}
        >
          <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
            Column Title
          </Typography>
          <Box>
            <Tooltip title="More Options">
              <IconButton
                sx={{ color: "text.primary" }}
                id="basic-column-dropdown"
                aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-column-dropdown",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* content  */}
        <ListCards cards={orderedCards} />
        {/* footer  */}
        <Box
          sx={{
            height: (theme) => theme.trello.footerHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Button startIcon={<AddCardIcon />}> Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleSharpIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}

export default Columns;
