 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import Friends from "./pages/Friends/Friends";
import Video from "./pages/Video/Video";
import Shop from "./pages/Shop/Shop";
import MyProfil from "./pages/myProfile/MyProfil";
import { Navigate } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/video" element={<Video />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myProfile" element={<MyProfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 


