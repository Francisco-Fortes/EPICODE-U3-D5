import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar.jsx";
// import MyFooter from "./components/MyFooter/MyFooter.jsx";
import MyCarousel from "./components/MyCarousel/MyCarousel.jsx";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      {/* <AllMovies /> */}
      {/* <MyFooter /> */}
    </div>
  );
}

export default App;
