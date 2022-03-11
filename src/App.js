import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import QuanityPicker from "./components/quanityPicker";
import Catalog from "./components/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>DD214 Clothing!</h1>
      <Catalog></Catalog>
      <Footer></Footer>

    </div>
  );
}

export default App;
