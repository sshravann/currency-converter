import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./App.css";

function App() {
  // Initializing all the state variables
  const [input, setInput] = useState(0);
  const [currencyType, setCurrencyType] = useState("INR");
  const [output, setOutput] = useState({
    INR: 0,
    USD: 0,
    EURO: 0,
    POUND: 0,
  });

  const options = ["INR", "USD", "EURO", "POUND"];

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    convert();
  }, [currencyType]);

  // Function to convert the currency
  const convert = () => {
    if (currencyType === "INR") {
      console.log("in inr");
      setOutput({
        INR: input,
        USD: input * 0.013,
        EURO: input * 0.012,
        POUND: input * 0.0099,
      });
    } else if (currencyType === "USD") {
      setOutput({
        INR: input * 74.51,
        USD: input,
        EURO: input * 0.88,
        POUND: input * 0.74,
      });
    } else if (currencyType === "EURO") {
      setOutput({
        INR: input * 84.5,
        USD: input * 1.13,
        EURO: input,
        POUND: input * 0.83,
      });
    } else if (currencyType === "POUND") {
      setOutput({
        INR: input * 101.32,
        USD: input * 1.36,
        EURO: input * 1.2,
        POUND: input,
      });
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="number"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <h3>Currency Type</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setCurrencyType(e.value);
            }}
            value={currencyType}
            placeholder="currencyType"
          />
        </div>
      </div>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          convert();
        }}
      >
        Convert
      </button>
      <div className="result">
        <table>
          <tr>
            <th>INR</th>
            <th>USD</th>
            <th>EURO</th>
            <th>POUND</th>
          </tr>
          <tr>
            <td>{output.INR}</td>
            <td>{output.USD}</td>
            <td>{output.EURO}</td>
            <td>{output.POUND}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
