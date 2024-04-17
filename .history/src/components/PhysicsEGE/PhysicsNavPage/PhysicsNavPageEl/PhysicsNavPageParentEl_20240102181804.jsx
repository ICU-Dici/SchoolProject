import React from "react"
import s from './PhysicsNavPageParentEl.module.css'










const PhysicsNavPageParentEl = (props) => {
    return(
        <div>
            {props.selectedCase === 0 ?
            <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden} onClick={() => {props.ChooseCaseAc(props.index, props.ChildCases, props.MainInfo, props.CurrentBackgroudImg)}}>{props.Name}</div> : 
            <div className={props.selectedCase === props.index ? s.burgerParentElSelected : s.burgerParentElNotSelected} onClick={() => {props.ChooseCaseAc(props.index, props.ChildCases, props.MainInfo)}}>{props.Name}</div>}
        </div>
    )
}


export default PhysicsNavPageParentEl;


