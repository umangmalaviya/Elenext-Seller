import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import OtpFill from "./Components/Pages/OtpFill";
import Demo from "./Components/Pages/Demo";
import RegisterAndStart from "./Components/Pages/RegisterAndStart";
import TwoStepV from "./Components/Pages/TwoStepV";
import TwoStepDetail from "./Components/Pages/TwoStepDetail";
import RegisterAndStartDetail from "./Components/Pages/RegisterAndStartDetail";
import TwoStepOtp from "./Components/Pages/TwoStepOtp";
import UpdateYourTexDetails from "./Components/Pages/UpdateYourTexDetails";
import ShowFillDetails from "./Components/Pages/ShowFillDetails";
import LandingPage from "./Components/Pages/LandingPage";
import Home from "./Components/Pages/Home";
import Inventory from "./Components/Pages/Inventory";
import LandingIntro from "./Components/Pages/LandingIntro";
import LandingBanefit from "./Components/Pages/LandingBanefit";
import Advertisement from "./Components/Pages/Advertisement";
import Help from "./Components/Pages/Help";
import LogOut from "./Components/Pages/LogOut";
import Price from "./Components/Pages/Price";
import Promotions from "./Components/Pages/Promotions";
import ReturnProduct from "./Components/Pages/ReturnProduct";
import Settings from "./Components/Pages/Settings";
import AddNewListing from "./Components/Pages/AddNewListing";
import SearchProduct from "./Components/Pages/SearchProduct";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingIntro" element={<LandingIntro />} />
          <Route path="/LandingBanefit" element={<LandingBanefit />} />
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

          <Route path="/Home" element={<Home />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Advertisement" element={<Advertisement />} />  
          <Route path="/Help" element={<Help />} />  
          <Route path="/LogOut" element={<LogOut />} />  
          <Route path="/Price" element={<Price />} />  
          <Route path="/Promotions" element={<Promotions />} />  
          <Route path="/ReturnProduct" element={<ReturnProduct />} />  
          <Route path="/Settings" element={<Settings />} />
          <Route path="/addnewlisting" element={<AddNewListing />} />
          <Route path="/searchproduct" element={<SearchProduct/>} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
