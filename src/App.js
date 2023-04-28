import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Navbar from "./Components/Pages/Navbar";
import Register from "./Components/Pages/Register";
import Footer from "./Components/Pages/Footer";
import OtpFill from "./Components/Pages/OtpFill";
import Demo from "./Components/Pages/Demo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OtpFill" element={<OtpFill />} />
          <Route path="/Demo" element={<Demo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
