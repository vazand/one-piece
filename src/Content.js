import React, { useState } from "react";

function Content() {
  function changeAnime() {
    const aniNames = [
      "One Piece",
      "N̥aruto",
      "DBZ",
      "Death Note",
      "One punch Man",
      "Bleach",
      "Boruto",
    ];
    const randNum = Math.floor(Math.random() * aniNames.length);
    setCurrentName(() => {
      return aniNames[randNum];
    });
  }
  const [currentName, setCurrentName] = useState("BEN 10");

  return (
    <main className="text-center flex flex-col ">
      <p>Let's Watch {currentName}</p>

      <button
        onClick={() => changeAnime()}
        className="rounded-md bg-black text-white p-2 m-auto"
      >
        change Anime
      </button>
    </main>
  );
}

export default Content;
