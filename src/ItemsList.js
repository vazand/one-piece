import React from "react";
import ListItems from "./ListItems";

function ItemsList({ items, handleChange, deleteAnItem }) {
  return (
    <ul className="list-none p-0">
      {items.map((item) => (
        <ListItems
          item={item}
          key={item.id}
          handleChange={handleChange}
          deleteAnItem={deleteAnItem}
        />
      ))}
    </ul>
  );
}

export default ItemsList;
