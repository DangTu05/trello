import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Card({ temporaryHideMedia }: { temporaryHideMedia?: boolean }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          overflow: "unset",
        }}
      >
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
      </MuiCard>
    );
  }
  return (
    <MuiCard
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
    </MuiCard>
  );
}

export default Card;
