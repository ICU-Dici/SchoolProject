import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <div><img className={s.DecorImg1} src="https://photos.fife.usercontent.google.com/pw/ABLVV84rXWlVqRi10IHSyruYdBWsaVFv_wJMBZ_S5Vvsv_w91Oidb1a-YIg=w400-h220-s-no-gm?authuser=1"/></div>
        
    )
}

export default Header;