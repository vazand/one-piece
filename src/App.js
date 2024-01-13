import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() {
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
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    //to delete old data from form and setNewItem as empty again
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");

    console.log(`Submitted`);
  }

  const addItem = (item) => {
    // creating Id for new Item
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem ];
    setItems(listItems);

    localStorage.setItem("todoApp", JSON.stringify(listItems));
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header title="A TODO APP" />
      <br />

      <Content
        items={items}
        handleChange={handleChange}
        deleteAnItem={deleteAnItem}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
