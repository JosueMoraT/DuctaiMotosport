import { CgHeart } from "react-icons/cg";

import './NavUtils.style.scss';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";

const NavUtils = () => {
    return <div className="nav-utils">
        <a href="favorites"><CgHeart />
        </a>
        <ShoppingCart />
    </div>
}

export { NavUtils };