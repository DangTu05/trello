import { Box } from "@mui/material";
import Columns from "./Columns/columns";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { ColumnType } from "../../../../apis/mock-data";
function ListColumns({ columns }: { columns: ColumnType[] | undefined }) {
  return (
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
      {columns?.map((column: ColumnType) => (
        <Columns key={column._id} column={column} />
      ))}

      {/* Box add new column  */}
      <Box
        sx={{
          maxWidth: "200px",
          minWidth: "200px",
          mx: 2,
          height: "fit-content",
          bgcolor: "#ffffff3d",
          borderRadius: "6px",
        }}
      >
        <Button
          sx={{
            color: "white",
            py: 1.5,
            justifyContent: "flex-start",
            width: "100%",
            pl: 2.5,
          }}
          startIcon={<PostAddIcon />}
        >
          Add new card
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
