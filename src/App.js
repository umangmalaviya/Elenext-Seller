import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Navbar from "./Components/Pages/Navbar";
import Register from "./Components/Pages/Register";
import Footer from "./Components/Pages/Footer";
import OtpFill from "./Components/Pages/OtpFill";
import Demo from "./Components/Pages/Demo";
import RegisterAndStart from "./Components/Pages/RegisterAndStart";
import TwoStepV from "./Components/Pages/TwoStepV";
import TwoStepDetail from "./Components/Pages/TwoStepDetail";
import RegisterAndStartDetail from "./Components/Pages/RegisterAndStartDetail";
import TwoStepOtp from "./Components/Pages/TwoStepOtp";
import UpdateYourTexDetails from "./Components/Pages/UpdateYourTexDetails";
import ShowFillDetails from "./Components/Pages/ShowFillDetails";


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
          <Route path="/twostepdetail" element={<TwoStepDetail />} />
          <Route path="/RegisterAndStartDetail" element={<RegisterAndStartDetail />} />
          <Route path="/TwoStepOtp" element={<TwoStepOtp />} />
          <Route path="/UpdateYourTexDetails" element={<UpdateYourTexDetails />} />
          <Route path="/ShowFillDetails" element={<ShowFillDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
