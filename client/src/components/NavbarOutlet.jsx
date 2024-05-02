import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const NavrbarOutlet = ()=>{
    return(
        <div className="outer-container">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default NavrbarOutlet;