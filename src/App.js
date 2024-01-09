import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
