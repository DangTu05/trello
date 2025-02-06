import { Container } from "@mui/material";
import AppBar from "./conponents/AppBar/index";
import BoardBar from "./pages/Boards/BoardBar";
import BoardContent from "./pages/Boards/BoardContent";
function App() {
  return (
    <Container
      ///Thuộc tính này được sử dụng để loại bỏ khoảng cách (gutter) mặc định của thành phần, giúp thành phần chiếm toàn bộ chiều rộng của vùng chứa mà không có khoảng cách bên trong
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.dark" }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default App;
