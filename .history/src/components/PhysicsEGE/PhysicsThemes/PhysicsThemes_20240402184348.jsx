import React from "react";
import { NavLink } from "react-router-dom";
import s from './/PhysicsThemes.module.css'





const PhysicsThemes= () => {
        return (
            <div>
                { document.URL === 'http://localhost:3000/Physics/themes'
                 ?
                 <div>
                <div className={s.CenterSlog}>PHYSICS</div>
                <div className={s.CMThemeWrap}><NavLink className={s.CMTheme}>classical mechanics</NavLink></div>
                <div className={s.EThemeWrap}><NavLink className={s.ETheme}>Electrodynamics</NavLink></div>
                <div className={s.NPThemeWrap}><NavLink className={s.NPTheme}>nuclear physics</NavLink></div>
                <div className={s.MKTThemeWrap}><NavLink className={s.MKTTheme}>molecular kinetic theory</NavLink></div>
                <div className={s.OThemeWrap}><NavLink className={s.OTheme}>Optics</NavLink></div>
                <div className={s.TORThemeWrap}><NavLink className={s.TORTheme}>theory of relativity</NavLink></div>
                </div>
                :
                <div>
                ввв
                </div>}
            </div>
        )
}

export default PhysicsThemes;