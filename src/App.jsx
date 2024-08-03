import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Service from "./component/Service";
import About from "./component/About";
import Pricing from "./component/Pricing";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
