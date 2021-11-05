import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  //function for to brake(make slow) our component
//   let i = 0;
//   while (i < 1000000000) i++;
  return num + 2; //we return to computed this value and then it shows in h4
}

function Memo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  //   const styles = {
  //     color: colored ? "red" : "black",
  //   };
  const styles = useMemo(() => { //we cash this value untill next render (save)
    return { color: colored ? "red" : "black" };
  },[colored]); //we depend on state colored

  const computed = useMemo(() => {
    //when we want to run our app faster and not call the same function many times we need use Memo
    //useMemo is cashing meaning of vars and if number doesn't change this function will not call
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    //difference between useEffect and useMemo is that useEffect will call every time when component rendering. every time component will create 'styles' object above and useeffect is going to think that 'styles' was changed. Thats why it is better to use useMemo
    console.log("Styles changed"); //it will call every render if styles is not in useMemo 
  }, [styles]);

  return (
    <>
      <h4 style={styles}>Calculate property: {computed} </h4>
      <button onClick={() => setNumber((prev) => prev + 1)}>Add</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Remove</button>
      <button onClick={() => setColored((prev) => !prev)}>Change color</button>
    </>
  );
}

export default Memo;
