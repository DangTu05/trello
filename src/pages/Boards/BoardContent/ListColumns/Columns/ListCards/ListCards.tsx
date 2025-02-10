import Card from "./Card/card";
import { Box } from "@mui/material";
import { CardType } from "../../../../../../apis/mock-data";
function ListCards({ cards }: { cards?: CardType[] }) {
  return (
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
          `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.headerHeight
          } - ${theme.trello.footerHeight})`,
      }}
    >
      {cards?.map((card: CardType) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  );
}

export default ListCards;
