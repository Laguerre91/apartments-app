import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const SideBar = () => {


    return (
        <aside className='SideBar'>
            <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""}>About</NavLink>
        </aside>
    )

}

export default SideBar 