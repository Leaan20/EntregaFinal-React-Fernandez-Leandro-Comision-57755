import Logo from '../../assets/icon/DuckWave10.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
export default function Navbar(){



    
    return (
    <>
    <nav className='navBar'>
        <div className='imgContainer'>
            <a > <Link to={'/'}><img className='logo' src={Logo} alt="Logo DuckWave" /></Link></a>
        </div>
        <ul className='listContainer'>
        <li><button className='navigationButton' ><Link to={'/'} >Inicio</Link> </button></li>
        <li><button className='navigationButton' ><Link to={'/products'} >Productos</Link>  </button></li>
        <li><button className='navigationButton' >Trajes de Neoprene</button></li>
        <li><button className='navigationButton' >Tablas</button></li>
        <li><button className='navigationButton' >Accesorios</button></li>
        <li><button className='navigationButton' ><Link to={'/contact'}>Contacto</Link>  </button></li>
        </ul>
        <div className='cartContainer'>
            <CartWidget />
        </div>
    </nav>
    </>
    )
}