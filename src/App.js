
function App() {

  function randomString() {
    const names = ["One Piece", "Naruto", "DBZ"];
    const ranNum = Math.floor(Math.random()*3);
    return names[ranNum];
  }
  return (
    <div>
      <p>I like watching  {randomString()}</p>
    </div>
  );
}

export default App;
