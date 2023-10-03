
import './App.css';
import Cart from './Pages/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Item from './Components/Item/Item';
import Category from './Components/Category/Category'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/Category/:itemCategory' element={<Category/>}/>
        <Route path='/ItemListContainer/:itemId' element={<Item/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
