import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
          <Navbar/>
      </header>

      <body>
        <ItemListContainer name={"Titulo nombre"} isRed={true}/>
      </body>

      <footer>
      </footer>
    </div>
  );
}

export default App;
