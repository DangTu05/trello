import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function Avatars() {
  return (
    <AvatarGroup
      sx={{
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
        },
      }}
      max={4}
    >
      <Tooltip title="DangTu">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Tooltip>
      <Tooltip title="DangTu">
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Tooltip>
      <Tooltip title="DangTu">
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Tooltip>
      <Tooltip title="DangTu">
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      </Tooltip>
      <Tooltip title="ĐangTu">
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </Tooltip>
    </AvatarGroup>
  );
}
