import React from "react"
import s from './PhysicsNavPageEl.module.css'










const PhysicsNavPageEl = (props) => {
    return(
        <div>
            <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}>{props.Content}</div>
        </div>
    )
}


export default PhysicsNavPageEl;