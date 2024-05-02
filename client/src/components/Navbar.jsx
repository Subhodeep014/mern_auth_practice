import React from "react";
import {Link, Outlet} from 'react-router-dom'

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <button className="btn"> <Link to="/home" className="link">Home</Link> </button>
            <button className="btn"><Link to="/signin" className="link">Sign in</Link></button>
            <button className="btn"><Link to="/signup" className="link">Sign up</Link></button> 
            
        </nav>
    )
    
}
export default Navbar;