import './Navbar.css'
import logo from './../../assets/logo.png'

const NavBar = () => {

    return (

        <nav className='nav-bar'>
            <h1>Go Lavapies!</h1>
            <img src={logo} alt="Logo" />
        </nav>

    )

}

export default NavBar