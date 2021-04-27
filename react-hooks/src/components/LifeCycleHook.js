import React, { useEffect, useState } from "react";

const LifeCycleHook = (props) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect when render/rerender without dependency");
  });

  useEffect(() => {
    console.log("useEffect when render/rerender with [] dependency");
  }, []);

  useEffect(() => {
    console.log("useEffect when render/rerender with counter1 dependency");
  }, [counter1]);

  return (
    <div>
      <div>Counter1 : {counter1}</div>
      <div>Counter2 : {counter2}</div>
      <div>
        <button onClick={() => setCounter1(counter1 + 1)}>Counter1</button>
        <button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>
      </div>
    </div>
  );
};

export default LifeCycleHook;
