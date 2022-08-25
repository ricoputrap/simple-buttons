import { useState } from "react";

function App() {
  const NUMS = Array.from(Array(10).keys());

  const [activeIndexes, setActiveIndexes] = useState([]);

  const addClickedButton = (num) => {
    console.log(activeIndexes.includes(num))
    setActiveIndexes(prev => [...prev, num]);
  }

  return (
    <div className="App" style={{ display: "flex", columnGap: "20px" }}>
      { NUMS.map(num => {
        if (activeIndexes.includes(num)) return <></>;
        
        return (
          <button
            style={{ padding: "20px" }}
            onClick={() => addClickedButton(num)}
            key={ num }
          >
            { num }
          </button>
        )
      })}
    </div>
  );
}

export default App;
