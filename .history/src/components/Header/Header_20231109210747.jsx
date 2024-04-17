import React from "react";
import s from './Header.module.css'

const Header = () =>{
    return(
        <header className={s.header}>
            Привет
        </header>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' />
    )
}

export default Header