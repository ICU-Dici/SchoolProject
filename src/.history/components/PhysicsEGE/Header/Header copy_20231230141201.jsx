import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <div><img className={s.DecorImg1} src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"/></div>
        
    )
}

export default Header;