import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function ListItems({ item, handleChange, deleteAnItem }) {
  return (
    <li className="flex items-center justify-between bg-slate-400 p-2 hover:bg-slate-600">
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
        aria-label={`Delete ${item.id}`}
        className="rounded-sm  ml-2 mr-3 h-6 w-6 hover:bg-red-600"
      />
    </li>
  );
}

export default ListItems;
