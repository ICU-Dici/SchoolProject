import React from "react";
import { NavLink } from "react-router-dom";
import s from './/PhysicsThemes.module.css'





const PhysicsThemes= (props) => {
    debugger
        return (
            <div>
                { props.isCurrentPageNav === 1 ?
                 <div>
                <div className={s.CenterSlog}>PHYSICS</div>
                <div onClick={props.ChangeCurrentPageToOther} className={s.CMThemeWrap}><NavLink className={s.CMTheme}>classical mechanics</NavLink></div>
                <div className={s.EThemeWrap}><NavLink className={s.ETheme}>Electrodynamics</NavLink></div>
                <div className={s.NPThemeWrap}><NavLink className={s.NPTheme}>nuclear physics</NavLink></div>
                <div className={s.MKTThemeWrap}><NavLink className={s.MKTTheme}>molecular kinetic theory</NavLink></div>
                <div className={s.OThemeWrap}><NavLink className={s.OTheme}>Optics</NavLink></div>
                <div className={s.TORThemeWrap}><NavLink className={s.TORTheme}>theory of relativity</NavLink></div>
                </div>
                :
                
                <div>
                <div className={s.NOCenterSlog}>PHYSICS</div>
                <div onClick={props.ChangeCurrentPageToNav} className={s.NOCMThemeWrap}><NavLink className={s.NOCMTheme}>classical mechanics</NavLink></div>
                <div className={s.NOEThemeWrap}><NavLink className={s.NOETheme}>Electrodynamics</NavLink></div>
                <div className={s.NONPThemeWrap}><NavLink className={s.NONPTheme}>nuclear physics</NavLink></div>
                <div className={s.NOMKTThemeWrap}><NavLink className={s.NOMKTTheme}>molecular kinetic theory</NavLink></div>
                <div className={s.NOOThemeWrap}><NavLink className={s.NOOTheme}>Optics</NavLink></div>
                <div className={s.NOTORThemeWrap}><NavLink className={s.NOTORTheme}>theory of relativity</NavLink></div>
                </div>
                }
            </div>
        )
}

export default PhysicsThemes;