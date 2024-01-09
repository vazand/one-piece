import React from "react";

function Content() {
  function randomString() {
    const names = ["One Piece", "N̥aruto", "DBZ", "Death Note"];
    var ranNum = Math.floor(Math.random() * names.length);
    return names[ranNum];
  }
  const changeAnime = (e) => {
    //console.log(e);
    // to check what is the target
    //console.log(e.target);
    // to get the inner text
    console.log(e.target.innerText);
  };

  // tbis is not working! check again!
  const towClick = (name) => {
    console.log(`HAHAHA ${name}`);
  };
  return (
    <main className="text-center">
      <p onDoubleClick={() => towClick(`SUPER`)}>click 2 times</p>
      <p>Let's Watch {randomString()}</p>
      {/* <button onClick={() => changeAnime("vazand")}>click</button> */}
      <button
        onClick={(e) => changeAnime(e)}
        className="rounded-3xl bg-orange-400 text-white"
      >
        Click Here
      </button>
      <br></br>
    </main>
  );
}

export default Content;
