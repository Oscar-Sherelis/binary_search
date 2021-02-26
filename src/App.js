import './App.css';
import React, { useState } from "react";

function App() {
  const [firstEl, setFirstEl] = useState(0)
  const [lastEl, setLastEl] = useState(100)

  return (
    <div className="App">
      <main>
        <h2>Enter first and last array element</h2>
        <form className="inputs">
          <label>
            <span className="el">First el</span>
            <input
              type="Number"
              value={firstEl}
              onChange={(e) => {
                setFirstEl(e.target.value);
              }}
            />
          </label>
          <label>
            <span className="el">last el</span>
            <input
              type="Number"
              value={lastEl}
              onChange={(e) => {
                setLastEl(e.target.value);
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
