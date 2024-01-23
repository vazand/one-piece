import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import SearchItems from "./SearchItems";
import apiRequest from "./apiRequests";
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
        console.log(`list of items => ${JSON.stringify(listItems)}`);
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
    }, 10);
  }, []);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("todoApp"));
  // }, []);

  const handleChange = async (idD) => {
    console.log(items[idD]);
    const latestData = items.map((item) =>
      item.id === idD ? { ...item, checked: !item.checked } : item
    );
    console.log(latestData);
    setItems(latestData);
    const myItem = latestData.filter((item) => item.id === idD);
    console.log(`selectedItem is => ${JSON.stringify(myItem[0])}`);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${myItem[0].id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if (result) setFetchError(result);
    //localStorage.setItem("todoApp", JSON.stringify(latestData));
  };
  async function deleteAnItem(dId) {
    const newData = items.filter((item) => item.id !== dId);
    console.log(newData);
    setItems(() => newData);

    const deletOption = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${dId}`

    const result =await apiRequest(reqUrl, deletOption)
    if(result) setFetchError(result)



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

  const addItem = async (item) => {
    // creating Id for new Item
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);

    //localStorage.setItem("todoApp", JSON.stringify(listItems));

    console.log(listItems)
    console.log(`addItem listOfItems as JsonStringfy=> ${JSON.stringify(listItems)}`);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header title="A TODO APP" />
      <br />

      <main className="text-center">
        {isLoading && <p>is Loading</p>}
        {fetchError && <p>{fetchError}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((itemEle) =>
              itemEle.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleChange={handleChange}
            deleteAnItem={deleteAnItem}
          />
        )}
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
