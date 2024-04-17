import React from "react"











const PhysicsNavPageEl = (props) => {
    return(
        <div>
            <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}>{props.Content}</div>
        </div>
    )
}


export default PhysicsNavPageEl;