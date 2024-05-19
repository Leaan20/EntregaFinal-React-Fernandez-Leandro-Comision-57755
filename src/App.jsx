import './App.css'
import Navbar from './components/Navigation/NavBar';
import ContactComponent from './components/contact/ContactComponent';
import HomeComponent from './components/home/HomeComponent';
import ItemListContainer from './components/itemView/ItemListContainer';
import ItemDetails from './components/itemView/ItemDetails';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomeComponent/>}  />
            <Route exact path='/products' element={<ItemListContainer />}  />
            <Route exact path='/product/:prodcId' element={<ItemDetails />}  />
            <Route exact path='/contact' element={<ContactComponent />}  />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
