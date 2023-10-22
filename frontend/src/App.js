import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Homepage from "./Homepage";
import Chatpage from "./Chatpage";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #dcf8c6;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.281);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export default App;
