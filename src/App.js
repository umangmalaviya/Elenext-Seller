import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Navbar from "./Components/Pages/Navbar";
import Register from "./Components/Pages/Register";
import Footer from "./Components/Pages/Footer";
import OtpFill from "./Components/Pages/OtpFill";
import Demo from "./Components/Pages/Demo";
import RegisterAndStart from "./Components/Pages/RegisterAndStart";
import TwoStepV from "./Components/Pages/TwoStepV";


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
          <Route path="/RegisterAndStart" element={<RegisterAndStart />} />
          <Route path="/TwoStepV" element={<TwoStepV />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
