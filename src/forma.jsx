import { useState } from "react";

export default function Forma({
  children,
  setValueMoney,
  valueMoney,
  exchange,
  setActiveForm,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div onSubmit={handleSubmit}>
      <form className="Forma">
        <input
          type="number"
          value={valueMoney}
          onChange={(e) => setValueMoney(e.target.value)}
        />
        <p>{children}</p>
        <p>{exchange(valueMoney)}</p>
        <button
          onClick={() => {
            setValueMoney("");
          }}
        >
          reset
        </button>
        <button onClick={() => setActiveForm("")}>close</button>
      </form>
    </div>
  );
}
