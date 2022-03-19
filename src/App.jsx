import Slider from "./Slider";
import Deposit from "./Deposit";

import "swiper/css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <br />

      <div className="container">
        <Deposit />

        <br />

        <Slider style={{ paddingTop: "12px" }} />

        <Footer />
      </div>
    </>
  );
}

export default App;
