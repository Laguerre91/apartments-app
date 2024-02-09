import './Navbar.css'
import logo from './../../assets/img/logo-home.png'

import { Link } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav className='Navbar'>
            <h1>Golden Homes</h1>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </nav>

    )

}

export default NavBar