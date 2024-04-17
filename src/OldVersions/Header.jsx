import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <div className={s.MainBody}>
            <NavLink to={path} className={s.NavLink}><span>Поступление</span></NavLink>
                <NavLink to={path} className={s.NavLink}><span>Главная</span></NavLink>
                <NavLink to={path} className={s.NavLink}><span>Гид</span></NavLink>
                <NavLink to={path} className={s.NavLink}><span>Перевод баллов</span></NavLink>
            </div>
            
        </header>
        
    )
}

export default Header;