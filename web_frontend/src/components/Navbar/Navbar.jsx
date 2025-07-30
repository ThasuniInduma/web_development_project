import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState("home")
  
  return (
    <div className="navbar">
        <Link to='/'><img className='logo' src={assets.name_logo} alt="" /></Link>
        <ul className='navbar-menu'>
            <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
            <Link to="/login">
                <button>Log in</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
