import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Website</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Users"> Users</NavLink>
                <NavLink to="/about"> About us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/posts"> Posts</NavLink>
                
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;