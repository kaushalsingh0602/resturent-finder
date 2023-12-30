
import logo from "./loho2.svg"
import { useState } from "react";  

const Header=()=>{
    const[login,setLogin]=useState("Login")
    return (
        <div className="header">
            <div className="logo">

                <img src={logo} alt="logo"/>  
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contect Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        login==="Login"?setLogin("Logout"):setLogin("Login");  

                    }}>{login}</button>
                </ul> 
            </div>

            
        </div>
    )
}

export default Header;