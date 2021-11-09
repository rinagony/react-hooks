import React, { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment', //for simple writing 
    DECREMENT: 'decrement'
}

function reducerState(state, action) {
  //we get current state and action which we sent from func onclick
  switch (action.type) { //we check action type
    case ACTIONS.INCREMENT: //if action type
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state; //if not, return state do nothing
  }
  //this func will dispatch into dispatch of usereducer
}

function Reducer() {
  const [state, dispatch] = useReducer(reducerState, { count: 0 }); //ibto useReducer there is func reducer which is above and meaning of current state
  //   const [count, setCount] = useState(0); the same with resucer, but not enough

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function descrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <>
      <button onClick={descrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Reducer;
