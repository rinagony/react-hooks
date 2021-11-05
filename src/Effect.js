import React, { useState, useEffect } from "react";

function Effect() {
  const [type, setType] = useState("users"); //get type from buttons
  const [data, setData] = useState([]); //when type has changed we get data from fake server, set here and display in body
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  }); //mouse move
  useEffect(() => {
    //наблюдаем за чем либо и выполняем функцию
    //call every render of component
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clean type"); //in the end of func we can clean something(like other functions or variables)
    };
  }, [type]); //if there are dependencies then this function call every time when this depends are changing

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };
  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener("mousemove", mouseMoveHandler); //call func when mouse move and set new state

    return () => {
      //cleaning function before component delete
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return (
    <>
      <h4>Resource: {type}</h4>

      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(pos, null, 2)}</pre> */}
    </>
  );
}

export default Effect;
