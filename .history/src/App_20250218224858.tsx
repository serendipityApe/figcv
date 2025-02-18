import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Rectangle Creator</h2>
      <p>
        Count:{" "}
        {
          <input
            id="count"
            type="number"
            onChange={(e) => {
              setCount(parseInt(e.target.value));
            }}
            value={count}
          />
        }
      </p>
      <button id="create">Create</button>
      <button id="cancel">Cancel</button>
    </>
  );
}

export default App;
