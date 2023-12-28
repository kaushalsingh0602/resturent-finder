
import logo from "./loho2.svg"  

const Header=()=>{
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
                </ul> 
            </div>

            
        </div>
    )
}

export default Header;