import React from "react";
import { NavLink } from "react-router-dom";
import s from './/PhysicsThemes.module.css'





const PhysicsThemes= () => {
        return (
            <div>
                <div className={s.CenterSlog}>PHYSICS</div>
                <div className={s.CMTheme}><NavLink className={s.CMTheme}>classical mechanics</NavLink></div>
                <NavLink className={s.ETheme}>Electrodynamics</NavLink>
                <NavLink className={s.MKTTheme}>molecular kinetic theory</NavLink>
                <NavLink className={s.NPTheme}>nuclear physics</NavLink>
                <NavLink className={s.TORTheme}>theory of relativity</NavLink>
                <NavLink className={s.OTheme}>Optics</NavLink>
            </div>
        )
}

export default PhysicsThemes;