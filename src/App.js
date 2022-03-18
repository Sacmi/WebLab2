import { useState } from "react";
import { Deposits } from "./data";
import { Slider } from "./Slider";

import "swiper/css";
import "./App.css";

function App() {
  const [currentDeposit, setCurrentDeposit] = useState(Deposits[1]);

  const selectDeposit = (e) => {
    const value = e.currentTarget.value;
    const deposit = Deposits.filter((d) => d.deposit === value)[0];

    setCurrentDeposit(deposit);
  };

  return (
    <div className="container">
      <h1>Лабораторная работа №2</h1>
      <h2>Слайдер</h2>
      <h4>Это мои любимые одногрупники:</h4>

      <Slider />

      <br />

      <h2>Калькулятор вкладов</h2>
      <div className="row align-items-center">
        <div className="col">
          <select
            onChange={selectDeposit}
            value={currentDeposit.deposit}
            className="form-select"
          >
            {Deposits.map((deposit, index) => (
              <option key={index} value={deposit.deposit}>
                {deposit.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <span>Выбран вклад: {currentDeposit.label}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
