import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <div className={s.MainBody}>
                <div className={s.burger}><div className={s.BurgerText} onClick={props.toggleBurgerMenuAc}>Menu</div><div>
                    <div className={s.burgerDecorEl}></div>
                    <div className={s.burgerDecorEl}></div>
                    <div className={s.burgerDecorEl}></div>
                    </div></div>
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                    </div>
                
            </div>
            
        </header>
        
    )
}

export default Header;