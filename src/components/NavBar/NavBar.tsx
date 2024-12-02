import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu"; 
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss'

const NavBar = () => {
    return <div className="nav-bar">
         <a href="/">
            <ImageFrame
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Yamaha-Logo.png"
            alt="logo-yamaha"
            width="110"
            />
        </a>
        <Menu />
        <NavUtils />

    </div>
};

export default NavBar;