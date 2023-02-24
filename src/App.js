import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">  
      <nav>
        <Navbar />
      </nav> 
      <body>
        <ItemListContainer greeting={"¡Bienvenido a la Clínica Kaizen!"}/>
      </body>
    </div>
  );
}

export default App;
