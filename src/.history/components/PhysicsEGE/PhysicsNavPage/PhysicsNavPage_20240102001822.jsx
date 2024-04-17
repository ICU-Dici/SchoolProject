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
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened} Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc}/>
                </div>
        </div>
    )
}

export default PhysicsNavPage