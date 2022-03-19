import Slider from "./Slider";
import Deposit from "./Deposit";

import "swiper/css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Лабораторная работа №2</h1>
      <h2>Слайдер</h2>
      <h4>Это мои любимые одногрупники:</h4>

      <Slider />

      <br />

      <h2>Калькулятор вкладов</h2>
      <Deposit />
    </div>
  );
}

export default App;
