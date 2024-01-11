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
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header title="A TODO APP" />
      <br />
      <Content
        items={items}
        handleChange={handleChange}
        deleteAnItem={deleteAnItem}
      />
      <Footer />
    </div>
  );
}

export default App;
