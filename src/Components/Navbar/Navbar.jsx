import './Navbar.css'
import logo from './../../assets/img/logo.png'

const NavBar = () => {

    return (

        <nav className='Navbar'>
            <h1>Go Lavapies!</h1>
            <img src={logo} alt="Logo" />
        </nav>

    )

}

export default NavBar