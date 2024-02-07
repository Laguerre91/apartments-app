import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";
import HousesList from "../HousesList/HousesList";
import './Homepage.css'

const Homepage = () => {


    return (
        <div className="Homepage">
            <NavBar />
            <SideBar />
            <HousesList />
            <Footer />
        </div>
    )

}

export default Homepage