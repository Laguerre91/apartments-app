import Homepage from './pages/Homepage/Homepage'
import AboutPage from './pages/AboutPage/AboutPage'
import DetailPage from './pages/DetailPage/DetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import NavBar from './Components/Navbar/Navbar'
import SideBar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'

import './App.css'

import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <SideBar />
      <Footer></Footer>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detail-info/:house_id' element={<DetailPage />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
