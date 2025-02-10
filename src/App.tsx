import { Container } from "@mui/material";
import AppBar from "./conponents/AppBar/AppBar";
import BoardBar from "./pages/Boards/BoardBar/BoardBar";
import BoardContent from "./pages/Boards/BoardContent/BoardContent";
import { mockData } from "./apis/mock-data";
function App() {
  return (
    <Container
      ///Thuộc tính này được sử dụng để loại bỏ khoảng cách (gutter) mặc định của thành phần, giúp thành phần chiếm toàn bộ chiều rộng của vùng chứa mà không có khoảng cách bên trong
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh" }}
    >
      <AppBar />
      <BoardBar boards={mockData?.board} />
      <BoardContent boards={mockData?.board} />
    </Container>
  );
}

export default App;
