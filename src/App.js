import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Equipo from "./Components/Equipo/Equipo.jsx";
import DetalleEquipo from "./Components/DetalleEquipo/DetalleEquipo.jsx";
import Servicios from "./Components/Servicios/Servicios.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import Contacto from "./Components/Contacto/Contacto.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Components/Context/CartContext.jsx";

function App() {
  
  return (
    <BrowserRouter>
    <CartContextProvider>

      <nav>
        <Navbar />
      </nav> 
  
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido a la Clínica Kaizen!"}/> }/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/equipo" element={<Equipo />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/equipo/detalles/:id" element={<DetalleEquipo />}/>
        <Route path="/servicios" element={<Servicios />}/>
        <Route path="/servicios/:category" element={<Servicios />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/category/:categoryid" element={<ItemListContainer />}/>
        <Route path="*" element={<h1>error 404: not found</h1>}/>
      </Routes>
    </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
