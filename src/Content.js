import ItemsList from "./ItemsList";
// If wanted we can also use
// function Content(props) {
// and call a property likeprops.title
// }


function Content({items,handleChange,deleteAnItem}) {
  return (
    <main className="text-center">
      {items.length > 0 ? (
        <ItemsList
          items={items}
          handleChange={handleChange}
          deleteAnItem={deleteAnItem}
        />
      ) : (
        <p className="m-auto p-2 rounded-lg bg-red-400 text-white">
          No Data to show
        </p>
      )}
    </main>
  );
}

export default Content;
