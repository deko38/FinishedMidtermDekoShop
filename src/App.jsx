import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Cart from "./pages/Cart.jsx";
import Jewelery from './pages/Jewelery.jsx';
import Electronics from './pages/Electronics.jsx';
import MensClothing from './pages/MensClothing.jsx'
import WomensClothing from './pages/WomensClothing.jsx'
import ProductDetails from "./pages/ProductDetails.jsx";
import Log from "./pages/Log.jsx";
import {useState} from "react";



const App =()=> {


  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const addItem = (newItem) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };
  return (
      <>

        <BrowserRouter>
          <Routes>
            <Route index element={<Log/>} />
            <Route path='/home' element={<Home addToCart={addToCart} cart={cart}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/cart' element={<Cart cart={cart} deleteItem={deleteItem}  addItem ={addItem}/>}/>
            <Route path="/jewelery" element={<Jewelery addToCart={addToCart} cart={cart} />} />
            <Route path="/electronics" element={<Electronics addToCart={addToCart} cart={cart}/>}/>
            <Route path="/mens-clothing" element={<MensClothing addToCart={addToCart} cart={cart} />} />
            <Route path="/womens-clothing" element={<WomensClothing  addToCart={addToCart} cart={cart}/>} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} cart={cart}/>} />
            <Route path ='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>




      </>
  )
}

export default App
