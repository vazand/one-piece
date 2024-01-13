import React from "react";
import { FaPlus } from "react-icons/fa";
function AddItem({ newItem, setNewItem, handleSubmit }) {
  function handleInputChange(e) {
    setNewItem(e.target.value);
  }
  return (
    <form
      className="m-auto p-2 rounded-md bg-green-500 flex justify-evenly"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name=""
        id="addItem"
        placeholder="Add Item"
        value={newItem}
        onChange={handleInputChange}
      />
      <button type="submit" className="p-2" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
