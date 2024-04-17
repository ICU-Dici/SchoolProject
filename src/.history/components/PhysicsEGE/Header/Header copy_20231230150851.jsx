import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <div className={s.MainBody}>
                <div className={s.burger}><div>Menu</div><span>
                    <div></div>
                    <div></div>
                    <div></div>
                    </span></div>
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                    </div>
                
            </div>
            
        </header>
        
    )
}

export default Header;