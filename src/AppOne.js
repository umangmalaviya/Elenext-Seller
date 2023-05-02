import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";

function AppOne() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppOne;
