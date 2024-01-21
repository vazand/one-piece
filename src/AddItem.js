import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
function AddItem({ newItem, setNewItem, handleSubmit }) {
  function handleInputChange(e) {
    setNewItem(e.target.value);
  }

  const refHook = useRef();

  return (
    <form
      className="m-auto p-2 rounded-lg bg-gray-400 flex justify-evenly"
      onSubmit={handleSubmit}
    >
      <input
        required
        autoFocus
        ref={refHook}
        type="text"
        name=""
        id="addItem"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value) }
      />
      <button
        type="submit"
        className="p-2"
        aria-label="Add Item"
        onClick={() => refHook.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
