import Button1 from "./buttons";
import Forma from "./forma";
import "./App.css";
import { useState } from "react";

function App() {
  const [activeForm, setActiveForm] = useState("");
  const [valueMoney, setValueMoney] = useState(0);
  const pl = (num) => (num * 4.65).toFixed(2);
  const indo = (num) => (num * 16.40197).toFixed(2);
  const us = (num) => (num * 1.07).toFixed(2);
  return (
    <h1>
      <Button1 setActiveForm={setActiveForm} name="pl-eu">
        eu-pl
      </Button1>
      <Button1 setActiveForm={setActiveForm} name="ind-eu">
        eu-ind
      </Button1>
      <Button1 setActiveForm={setActiveForm} name="eu-us">
        eu-us
      </Button1>
      {activeForm === "pl-eu" && (
        <Forma
          setActiveForm={setActiveForm}
          valueMoney={valueMoney}
          setValueMoney={setValueMoney}
          exchange={pl}
        >
          Euro to Zółte
        </Forma>
      )}
      {activeForm === "ind-eu" && (
        <Forma
          setActiveForm={setActiveForm}
          valueMoney={valueMoney}
          setValueMoney={setValueMoney}
          exchange={indo}
        >
          Euro to Indonesian Rupiah
        </Forma>
      )}
      {activeForm === "eu-us" && (
        <Forma
          setActiveForm={setActiveForm}
          valueMoney={valueMoney}
          setValueMoney={setValueMoney}
          exchange={us}
        >
          Euro to Usd
        </Forma>
      )}
    </h1>
  );
}

export default App;
