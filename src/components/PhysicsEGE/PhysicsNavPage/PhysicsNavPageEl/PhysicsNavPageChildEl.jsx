import React from "react"
import s from './PhysicsNavPageChildEl.module.css'
import { NavLink } from "react-router-dom";











const PhysicsNavPageChildEl = (props) => {
    return (
        <div>
            <NavLink className={s.BurgerChildElLink} to={props.PathTo} onClick={() => {props.CloseOnClick(props.BackgroundColor)}}>
                <div className={s.BurgerChildEl}>{props.content}</div></NavLink>
        </div>
    )
}


export default PhysicsNavPageChildEl;


