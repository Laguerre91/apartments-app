import './Navbar.css'
import logo from './../../assets/img/logo-home.png'

const NavBar = () => {

    return (

        <nav className='Navbar'>
            <h1>Cozy Homes</h1>
            <img src={logo} alt="Logo" />
        </nav>

    )

}

export default NavBar