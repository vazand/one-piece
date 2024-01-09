import React from "react";

function Content() {
  function randomString() {
    const names = ["One Piece", "N̥aruto", "DBZ", "Death Note"];
    var ranNum = Math.floor(Math.random() * names.length);
    return names[ranNum];
  }
  const changeAnime = () => {
    console.log(randomString);
    return randomString();
  };
  return (
    <div className="text-center">
      <p>Let's Watch {randomString()}</p>
    </div>
  );
}

export default Content;
