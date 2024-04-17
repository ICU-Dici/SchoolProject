import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <img className={s.DecorImg1} src="https://photos.fife.usercontent.google.com/pw/ABLVV86_jr_3xLcTbO7-p7KLKRKNdfDjzs56MAnfM_BrRR6q6MVA4dwkgzA=w400-h220-s-no-gm?authuser=0"/>
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