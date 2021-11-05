import React from "react";
import Calllback from "./Calllback";
import ContextHook from "./ContextHook";
import Effect from "./Effect";
import Memo from "./Memo";
import Refs from "./Refs";
import Usestate from "./Usestate";

function App() {
 
  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <h2>1. UseState hook</h2>
        <Usestate />
      </div>
      <div>
        <h2>2. UseEffect hook</h2>
        <Effect />
      </div>
      <div>
        <h2>3. UseRef hook</h2>
        <Refs />
      </div>
      <div>
        <h2>4. UseMemo hook</h2>
        <Memo />
      </div>
      <div>
        <h2>4. UseCallback hook</h2>
        <Calllback />
      </div>
      <div>
        <h2>5. UseContext hook</h2>
        <ContextHook />
      </div>
    </div>
  );
}

export default App;
