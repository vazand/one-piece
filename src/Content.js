import React, { useState } from "react";

function Content() {
  // function changeAnime() {
  //   const aniNames = [
  //     "One Piece",
  //     "N̥aruto",
  //     "DBZ",
  //     "Death Note",
  //     "One punch Man",
  //     "Bleach",
  //     "Boruto",
  //   ];
  //   const randNum = Math.floor(Math.random() * aniNames.length);
  //   setCurrentName(() => {
  //     return aniNames[randNum];
  //   });
  // }
  // const [currentName, setCurrentName] = useState("BEN 10");

  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "I like One Piece",
    },
    {
      id: 2,
      checked: true,
      item: "I like Naruto",
    },
    {
      id: 3,
      checked: false,
      item: "I like Boruto",
    },
  ]);

  return (
    <main className="text-center">
      <ul className="">
        {items.map((item) => (
          <li className="text-center flex justify-between   ">
            <br />
            <input type="checkbox" className="m-2" checked={item.checked} />
            <label className="m-2">{item.item}</label>
            <button
              type="button"
              className="rounded-sm p-2 bg-orange-500 m-2 text-black"
            >
              Delete
            </button>
            <br />
          </li>
        ))}
      </ul>
      {/* <p>Let's Watch {currentName}</p>

      <br />
      <button
        onClick={() => changeAnime()}
        className="rounded-md bg-black text-white p-2 m-auto"
      >
        change Anime
      </button> */}
    </main>
  );
}

export default Content;
