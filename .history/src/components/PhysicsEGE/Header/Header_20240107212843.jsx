import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <div className={s.MainBody}>
                
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                    </div>
                
            </div>
            
        </header>
        
    )
}

export default Header;