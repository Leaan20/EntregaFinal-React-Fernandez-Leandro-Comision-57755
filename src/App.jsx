import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Navbar from './components/Navigation/NavBar';
import ContactComponent from './components/contact/ContactComponent';
import ItemListContainer from './components/itemView/ItemListContainer';
import ItemDetailContainer from './components/itemView/ItemDetailContainer';
import Cart from './components/cartView/Cart';
import Checkout from './components/cartView/Checkout';

import './App.css'
import { CartProvider } from './components/context/CartContext';

//Toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  

  return (
    <>
      {/**Envolvemos todo el contexto de la app para que pueda utilizar las funciones que proveamos por el provider */}
    <CartProvider>

      <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}  />
            <Route exact path='/item/:Id' element={<ItemDetailContainer />}  />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />}  />
            <Route exact path='/category' element={<ItemListContainer />}  />
            <Route exact path='/contact' element={<ContactComponent />}  />
            <Route exact path='/cart' element={<Cart />}  />
            <Route exact path='/checkout' element={<Checkout />}  />
          </Routes>
      </BrowserRouter>

      </CartProvider>
    </>
  )
}

export default App
