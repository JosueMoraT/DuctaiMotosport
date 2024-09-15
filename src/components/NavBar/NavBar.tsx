import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu"; 
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss'

const NavBar = () => {
    return <div className="nav-bar">
        <ImageFrame
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ducati_red_logo.PNG/723px-Ducati_red_logo.PNG"
        alt="logo-ducati"
        width="50"
        />
        <Menu />
        <NavUtils />

    </div>
}

export default NavBar;