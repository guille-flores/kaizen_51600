import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
          
      <header className="App-header">
        <Navbar/>
      </header>

      <body>
        <ItemListContainer greeting={"¡Bienvenido a Clínica Kaizen! Contamos con 5 años de experiencia en el sector de salud mental y de orientación vocacional. Conoce a nuestro equipo y los productos y servicios que brindamos."}/>
      </body>

      <footer>
      </footer>
    </div>
  );
}

export default App;
