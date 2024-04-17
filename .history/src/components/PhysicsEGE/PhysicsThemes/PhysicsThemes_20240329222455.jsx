import React from "react";
import { NavLink } from "react-router-dom";
import s from './/PhysicsThemes.module.css'





const PhysicsThemes= () => {
        return (
            <div>
                <div className={s.CenterSlog}>PHYSICS</div>
                <div className={s.CMThemeWrap}><NavLink className={s.CMTheme}>classical mechanics</NavLink></div>
                <div className={s.EThemeWrap}><NavLink className={s.ETheme}>Electrodynamics</NavLink></div>
                <div className={s.NPThemeWrap}><NavLink className={s.NPTheme}>nuclear physics</NavLink></div>
                <NavLink className={s.MKTTheme}>molecular kinetic theory</NavLink>
                <NavLink className={s.OTheme}>Optics</NavLink>
                <NavLink className={s.TORTheme}>theory of relativity</NavLink>
            </div>
        )
}

export default PhysicsThemes;