import { NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../assets/logo1.png'
import bg from '../assets/15.jpg'

const Navbar = () => {
    return (
        <div className="">
            <nav className="flex items-center justify-between px-2" style={{backgroundImage: `url(${bg})`}}>
                <div className="flex items-center">
                    <img className="w-20 h-24" src={logo} alt="" />
                    <h2 className="text-5xl text-white">Espresso Emporium</h2>
                </div>
                <ul className="flex justify-center gap-10 text-yellow-500 text-xl mx-auto">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
                    <li><NavLink to='/Register'>Register</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;