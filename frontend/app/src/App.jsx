import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginUser from "./pages/Login/LoginUser";

// Rotas
import Home from "./pages/Home/Home";
import AddPost from "./pages/AddPost/AddPost"
import DeletePost from "./pages/deletePost/DeletePost";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginUser/> }></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/addPost" element={<AddPost/>}></Route>
          <Route path="/deletePost" element={<DeletePost/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
