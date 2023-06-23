import React, { useState } from "react";

const UseStateWithArray = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div>
      <h1>useState Hook with Array</h1>
      <button onClick={addItem}>Add Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateWithArray;
