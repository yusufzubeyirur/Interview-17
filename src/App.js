import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }}>Login oldunuz.</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickNumber = (number) => {
    const newInputValue = inputValue + number;
    setInputValue(newInputValue);

    if (newInputValue.length === 4) {
      if (newInputValue === combination.join("")) {
        setIsCorrect(true);
      } else {
        alert("Hatalı kombinasyon");
        setInputValue("");
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        {isCorrect ? (
          <NextScreen />
        ) : (
          <div
            style={{
              width: "300px",
              height: "100px",
              textAlign: "center",
              margin: "0 auto",
              fontSize: "50px",
              border: "1px solid black",
            }}
          >
            {inputValue}
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(3,100px)",
          gap: "5px",
        }}
      >
        {!isCorrect &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleClickNumber(number)}
              style={{
                fontSize: "50px",
                width: "93px",
                height: "93px",
                backgroundColor: "#FF5733",
                cursor: "pointer",
                border: "1px solid black",
                padding: "5px",
                margin: "5px",
              }}
            >
              {number}
            </button>
          ))}
        {!isCorrect && (
          <button
            onClick={() => handleClickNumber(0)}
            style={{
              gridColumn: "2/3",
              cursor: "pointer",
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              width: "100px",
              height: "100px",
              fontSize: "50px",
              backgroundColor: "#FF5733",
            }}
          >
            0
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
