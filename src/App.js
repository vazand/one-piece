import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import SearchItems from "./SearchItems";
//import ProjectChallenge from "./ProjectChallenge";
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState(
    //JSON.parse(localStorage.getItem("todoApp")) || []
    []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");

        //console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.error(err.message);
        setFetchError(`${err.message}`);
        console.log(fetchError);
      } finally {
        setIsloading(false);
      }
    };
    // basically setTimeout executes the function after specified millisecond
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("todoApp"));
  // }, []);

  function handleChange(idD) {
    console.log(items[idD]);
    const latestData = items.map((item) =>
      item.id === idD ? { ...item, checked: !item.checked } : item
    );
    setItems(() => latestData);
    //localStorage.setItem("todoApp", JSON.stringify(latestData));
  }
  function deleteAnItem(dId) {
    const newData = items.filter((item) => item.id !== dId);
    console.log(newData);
    setItems(() => newData);
    //localStorage.setItem("todoApp", JSON.stringify(newData));
  }
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
    const listItems = [...items, addNewItem];
    setItems(listItems);

    localStorage.setItem("todoApp", JSON.stringify(listItems));
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header title="A TODO APP" />
      <br />

      <main className="text-center">
        {isLoading && <p>is Loading</p>}
        {fetchError && <p>{fetchError}</p> }
        {!isLoading && !fetchError &&
        <Content
        items={items.filter((itemEle) =>
          itemEle.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleChange={handleChange}
          deleteAnItem={deleteAnItem}
          />
        }  
        
      </main>
      <div className="m-auto">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <br />
        <SearchItems search={search} setSearch={setSearch} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
