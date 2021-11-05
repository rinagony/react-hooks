import React, { useState, useCallback } from "react";
import ItemsList from "./ItemsList";

function Calllback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "red" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    //useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <>
      <h4 style={styles}>Number of elements: </h4>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      {/* onclick we increase counter */}
      <button onClick={() => setColored((prev) => !prev)}>Change</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default Calllback;
