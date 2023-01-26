import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
// import CustomFooter from "./components/CustomFooter/CustomFooter";
import MyCarousel from "./components/MyCarousel/MyCarousel";
import { BrowserRouter, Routes } from "react-router-dom";
// import MyFooter from "./components/MyFooter/MyFooter";
function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Routes>
          <MyCarousel nameSaga="Star Wars" />
          <MyCarousel nameSaga="BattleStar Galactica" />
          <MyCarousel nameSaga="Lord of the Rings" />
        </Routes>
        {/* <CustomFooter /> */}
        {/* <MyFooter /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
