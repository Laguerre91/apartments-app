import './Footer.css'
import githubLogo from './../../assets/img/logo-github.png'


const Footer = () => {

    return (

        <footer className='footer'>
            <div className='footer-github'>
                <img src={githubLogo} alt="Github Logo" />
                <a href="https://github.com/Laguerre91/apartments-app">Github Repository</a>
            </div>
            <div className='footer-copyright'>
                <p>&copy; 2024 Lara Aguerre - Pedro Roca </p>
            </div>
        </footer>

    )

}

export default Footer