import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div className="flex gap-6 w-11/12 mx-auto font-bold">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/oops">ooops</NavLink>
        </div>
    );
};

export default Nav;