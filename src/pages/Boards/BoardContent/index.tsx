import { Box, Typography } from "@mui/material";
import * as React from "react";
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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
const Header_Height = "50px";
const Footer_Height = "50px";
function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          width: "100%",
          height: "100%",
          bgcolor: "inherit",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {/* column */}
        <Box
          sx={{
            maxWidth: "250px",
            minWidth: "250px",
            bgcolor: (theme) => {
              return theme.palette.mode === "dark" ? "#336433" : "#ebecf0";
            },
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Header  */}
          <Box
            sx={{
              display: "flex",
              p: 2,
              justifyContent: "space-between",
              alignItems: "center",
              height: Header_Height,
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
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: "0 5px",
              m: "0 5px",
              gap: 1,
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(
                  5
                )} - ${Header_Height} - ${Footer_Height})`,
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140, cursor: "pointer" }}
                image="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography gutterBottom>Lizard</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button startIcon={<CommentIcon />} size="small">
                  15
                </Button>
                <Button startIcon={<AttachmentIcon />} size="small">
                  10
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer  */}
          <Box
            sx={{
              height: Footer_Height,
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
        <Box
          sx={{
            maxWidth: "250px",
            minWidth: "250px",
            bgcolor: (theme) => {
              return theme.palette.mode === "dark" ? "#336433" : "#ebecf0";
            },
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Header  */}
          <Box
            sx={{
              display: "flex",
              p: 2,
              justifyContent: "space-between",
              alignItems: "center",
              height: Header_Height,
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
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: "0 5px",
              m: "0 5px",
              gap: 1,
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(
                  5
                )} - ${Header_Height} - ${Footer_Height})`,
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140, cursor: "pointer" }}
                image="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography gutterBottom>Lizard</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button startIcon={<CommentIcon />} size="small">
                  15
                </Button>
                <Button startIcon={<AttachmentIcon />} size="small">
                  10
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer  */}
          <Box
            sx={{
              height: Footer_Height,
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
      </Box>
    </Box>
  );
}

export default BoardContent;
