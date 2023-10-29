
import './App.css';
import Cart from './Pages/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Item from './Components/Item/Item';
import Category from './Components/Category/Category'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import { CartProvider } from './context/CartContext';
import Checkout from './Components/Checkout/Checkout';
function App() {
  
  return (
    <CartProvider>
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Category/:itemCategory' element={<Category/>} />
        <Route path='/ItemListContainer/:itemId' element={<Item/>} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
