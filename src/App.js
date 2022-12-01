import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
// import CustomFooter from "./components/CustomFooter/CustomFooter";
import MyCarousel from "./components/MyCarousel/MyCarousel";
// import MyFooter from "./components/MyFooter/MyFooter";
function App() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel nameSaga="Star Wars" />
      <MyCarousel nameSaga="BattleStar Galactica" />
      <MyCarousel nameSaga="Lord of the Rings" />
      {/* <CustomFooter /> */}
      {/* <MyFooter /> */}
    </div>
  );
}

export default App;
