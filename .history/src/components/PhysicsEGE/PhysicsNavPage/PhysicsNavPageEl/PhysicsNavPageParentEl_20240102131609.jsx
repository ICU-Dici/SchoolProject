import React from "react"
import s from './PhysicsNavPageParentEl.module.css'










const PhysicsNavPageEl = (props) => {
    return(
        <div>
            {props.selectedCase === 0 ?
            <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden} onClick={() => {props.ChooseCaseAc(props.index)}}>{props.Content}</div> : 
            <div className={props.selectedCase === props.index ? s.burgerParentElSelected : s.burgerParentElNotSelected} onClick={() => {props.ChooseCaseAc(props.index)}}>{props.Content}</div>}
        </div>
    )
}


export default PhysicsNavPageEl;


