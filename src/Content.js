import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "I like One Piece",
    },
    {
      id: 2,
      checked: false,
      item: "I like Naruto",
    },
    {
      id: 3,
      checked: false,
      item: "I like Boruto",
    },
  ]);

  function handleChange(idD) {
    console.log(items[idD]);
    const latestData = items.map((item) =>
      item.id === idD ? { ...item, checked: !item.checked } : item
    );
    setItems(() => latestData);
    localStorage.setItem("todoApp", JSON.stringify(latestData));
  }
  function deleteAnItem(dId) {
    const newData = items.filter((item) => item.id !== dId);
    console.log(newData);
    setItems(() => newData);
    localStorage.setItem("todoApp", JSON.stringify(newData));
  }
  return (
    <main className="text-center">
      {items.length > 0 ? (
        <ul className="list-none p-0">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-slate-400 p-2 hover:bg-slate-600"
            >
              <input
                type="checkbox"
                className="mr-3 h-6 w-6"
                onChange={() => {
                  handleChange(item.id);
                }}
                checked={item.checked}
              />
              <label className="text-white text-lg">{item.item}</label>
              <FaTrashAlt
                onClick={() => deleteAnItem(item.id)}
                role="button"
                tabIndex="0"
                className="rounded-sm  ml-2 mr-3 h-6 w-6 hover:bg-red-600"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="m-auto p-2 rounded-lg bg-red-400 text-white">No Data to show</p>
      )}
    </main>
  );
}

export default Content;
