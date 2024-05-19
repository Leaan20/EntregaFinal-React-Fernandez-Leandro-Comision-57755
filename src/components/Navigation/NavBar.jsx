import Logo from '../../assets/icon/DuckWave10.png';
import './NavBar.css';
import CartWidget from './CartWidget';
export default function Navbar(){



    
    return (
    <>
    <nav className='navBar'>
        <div className='imgContainer'>
        <img className='logo' src={Logo} alt="Logo DuckWave" />
        </div>
        <ul className='listContainer'>
        <li><button className='navigationButton' >Inicio</button></li>
        <li><button className='navigationButton' >Trajes de Neoprene</button></li>
        <li><button className='navigationButton' >Tablas</button></li>
        <li><button className='navigationButton' >Accesorios</button></li>
        <li><button className='navigationButton' >Contacto</button></li>
        </ul>
        <div className='cartContainer'>
            <CartWidget />
        </div>
    </nav>
    
    </>
    )
}