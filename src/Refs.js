import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";

// let renderCount = 1;
//Ref save state when we work with a component and when render it, but ref doesn't call render!!!

function Refs() {
  //   const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1); //in ref we can put all types of var, but we should contact with it through var.current
  const inputRef = useRef(null); //also we can use it to contact with DOM elements
  const prevValue = useRef(""); //also we can use ref when we want to safe previous state!!!

  useEffect(() => {
    // setRenderCount(prev => prev + 1) // its a loop. when state change this func calls  again
    renderCount.current++; //when we change var like this it call only once
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus(); //on click btn focus on input

  return (
    <>
      <h4>Number of renders: {renderCount.current}</h4>
      <h4>Previous value: {prevValue.current}</h4>
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default Refs;
