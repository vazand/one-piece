import React, { useState } from "react";

function Content() {
  function randomString() {
    const names = ["One Piece", "N̥aruto", "DBZ", "Death Note"];
    var ranNum = Math.floor(Math.random() * names.length);
    const currentVal = names[ranNum];
    console.log(`current val = ${currentVal}`);
    return currentVal;
  }

  const [count, setCount] = useState(50);
  function increment() {
    // Here all of the count value is the same
    // so even we try to increase the setCount three times
    // all of the count are same
    // ex: if count = 12 then it applied for three times
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // if we actually want to update the count 3 time
    // we have to use a anon function inside
    //like this
    setCount((param1) => {
      return param1 + 1;
    });
    setCount((param2) => {
      return param2 + 1;
    });
    setCount((param3) => {
      return param3 + 1;
    });
  }
  function decrement() {
    setCount(count - 1);
  }
  function name() {
    console.log("hahaha I am gonna slow the page");
  }
  // this will print again and again
  // const [names, setname] = useState(name())
  // this will print only once
  const [names, setname] = useState(() => {
    name();
  });

  return (
    <main className="text-center flex flex-col ">
      <p>Let's Watch DBZ</p>

      <button
        onClick={() => increment()}
        className="rounded-lg bg-orange-400 text-white p-2 m-auto"
      >
        ADDITION
      </button>
      <span>current Value {count}</span>
      <button
        onClick={() => decrement()}
        className="rounded-lg bg-orange-400 text-white p-2 m-auto"
      >
        SUBTRACTION
      </button>
    </main>
  );
}

export default Content;
