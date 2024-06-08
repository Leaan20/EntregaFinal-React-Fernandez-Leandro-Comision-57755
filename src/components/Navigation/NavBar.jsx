import Logo from '../../assets/icon/DuckWave10.png';
import './NavBar.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
export default function Navbar(){



    
    return (
    <>
    <nav className='navBar'>
        <div className='imgContainer'>
             <Link to={'/'}><img className='logo' src={Logo} alt="Logo DuckWave" /></Link>
        </div>
        <ul className='listContainer'>
        <li><button className='navigationButton' ><Link to={'/'} >inicio</Link>  </button></li>
        <li><button className='navigationButton' > <Link to={'/category/trajes'}> Trajes de Neoprene</Link> </button></li>
        <li><button className='navigationButton' > <Link to={'/category/tablas'}> Tablas</Link> </button></li>
        <li><button className='navigationButton' > <Link to={'/category/accesorios'}> Accesorios</Link> </button></li>
        <li><button className='navigationButton' ><Link to={'/contact'}>Contacto</Link>  </button></li>
        </ul>
            <div className='CartContainer'></div>
            <Link to={'/cart'}> 
                <CartWidget />
            </Link>
    </nav>
    </>
    )
}