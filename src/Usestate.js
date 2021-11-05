import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calc..");
  return Math.trunc(Math.random() * 20);
}

function Usestate() {
  // const [counterState, setCounterState] = useState(0);
  const [counterState, setCounterState] = useState(() => {
    return computeInitialCounter(); //with call back function func bellow will call only once, otherwise it will be called every render
  }); //

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // setCounterState(counterState + 1); // we can't change counterState twice, because we get in this function only one meaning. If we need to change a few times we can se callback function in setCounterState which should have prev condition
    // setCounterState(counterState + 1);//we will get still +1, not +2
    setCounterState((prevCounter) => {
      return prevCounter + 1;
    });

    // setCounterState((prevCounter) => prevCounter + 1); //we will get + 2 because we have prev condition
  }
  function decrement() {
    setCounterState(counterState - 1);
  }

  function updateTitle() {
    setState(prev => { //we need prev state for changing part of this state
      return {
        ...prev, //add all prev
        title: 'New title' //change only title
      }
    })
  }
  return (
    <>
      <h4>Counter: {counterState}</h4>
      <button onClick={increment} className="btn btn-success">
        Add
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Delete
      </button>
      <button onClick={updateTitle}>Change title</button>


      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </>
  );
}

export default Usestate;
