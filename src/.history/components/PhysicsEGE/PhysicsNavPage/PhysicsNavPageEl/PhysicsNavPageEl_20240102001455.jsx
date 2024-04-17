import React from "react"
import s from './PhysicsNavPageEl.module.css'










const PhysicsNavPageEl = (props) => {
    return(
        <div>
            {props.selectedCase === 0 ?
            <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}>{props.Content}</div> : 
            <div className={props.selectedCase === props.index ? s.burgerParentElSelected : s.burgerParentElNotSelected}>{props.Content}</div>}
        </div>
    )
}


export default PhysicsNavPageEl;


