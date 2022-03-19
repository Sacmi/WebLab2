import { DepositInfo } from "./data";
import { useState } from "react";

function getDepositIndexByName(name) {
  return DepositInfo.findIndex((d) => d.deposit === name);
}

const Deposit = () => {
  const [currentDeposit, setCurrentDeposit] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [money, setMoney] = useState(100000);

  const selectDeposit = (e) => {
    const value = e.currentTarget.value;
    const deposit = getDepositIndexByName(value);

    setCurrentDeposit(deposit);
    setCurrentPeriod(0);
  };

  const selectPeriod = (e) => {
    const value = e.currentTarget.value;
    const periodIndex = DepositInfo[currentDeposit].periods.findIndex(
      (p) => p.value === +value
    );

    setCurrentPeriod(periodIndex);
  };

  const changeMoney = (e) => {
    const regex = /^\d+$/;
    const value = e.target.value;

    if (value === "") setMoney(0);
    if (regex.test(value)) setMoney(+value);
  };

  const calculate = () => {
    const { value, percent } =
      DepositInfo[currentDeposit].periods[currentPeriod];

    return (value / 12) * percent * money + money;
  };

  const formatMoney = (val) => {
    if (val % 1 === 0) {
      return val.toString();
    } else {
      return val.toFixed(2);
    }
  };

  return (
    <div className="row align-items-center">
      <div className="col">
        <p>Выберите вклад:</p>

        <select
          onChange={selectDeposit}
          value={currentDeposit.deposit}
          className="form-select"
        >
          {DepositInfo.map((deposit, index) => (
            <option key={index} value={deposit.deposit}>
              {deposit.label}
            </option>
          ))}
        </select>

        <p>Выберите срок:</p>
        <select onChange={selectPeriod} className="form-select">
          {DepositInfo[currentDeposit].periods.map((val, index) => (
            <option key={index} value={val.value}>
              {val.label}
            </option>
          ))}
        </select>

        <p>Сумма:</p>
        <input className="form-control" value={money} onInput={changeMoney} />
      </div>
      <div className="col">
        <p>Выбран вклад: {DepositInfo[currentDeposit].label}</p>
        <p>Срок: {DepositInfo[currentDeposit].periods[currentPeriod].label}</p>
        <p>
          Проценты:{" "}
          {DepositInfo[currentDeposit].periods[currentPeriod].percent * 100}%
        </p>
        <p>Исходная сумма: {money} рублей</p>
        <p>В конце срока вы получите {formatMoney(calculate())} рублей</p>
      </div>
    </div>
  );
};

export default Deposit;
