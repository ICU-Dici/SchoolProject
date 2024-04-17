import React from "react"
import s from './PhysicsNavPage.module.css'
import PhysicsNavPageEl from "./PhysicsNavPageEl/PhysicsNavPageEl"





const PhysicsNavPage = (props) =>{
    return ( 
        <div>
            <div className={s.HeaderBurgerMenu}>
                    <div className={s.logoBurgMenu}>logo</div>
                    <div></div>
                    <div className={s.closeBurgMenu} onClick={() => {props.toggleBurgerMenuAc(false)}}>close</div>
                </div>
                <div className={s.ParentsElements}>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened} Content={'ЕГЭ'}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'}/>
                </div>
        </div>
    )
}

export default PhysicsNavPage