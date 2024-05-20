import './App.css'
import Navbar from './components/Navigation/NavBar';
import ContactComponent from './components/contact/ContactComponent';
import ItemListContainer from './components/itemView/ItemListContainer';
import ItemDetailContainer from './components/itemView/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}  />
            <Route exact path='/item/:Id' element={<ItemDetailContainer />}  />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />}  />
            <Route exact path='/category' element={<ItemListContainer />}  />
            <Route exact path='/contact' element={<ContactComponent />}  />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
