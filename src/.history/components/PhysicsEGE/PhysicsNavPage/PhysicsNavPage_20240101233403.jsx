import React from "react"
import s from './PhysicsNavPage.module.css'





const PhysicsNavPage = (props) =>{
    return ( 
        <div>
            <div className={s.HeaderBurgerMenu}>
                    <div className={s.logoBurgMenu}>logo</div>
                    <div></div>
                    <div className={s.closeBurgMenu} onClick={() => {props.toggleBurgerMenuAc(false)}}>close</div>
                </div>
                <div className={s.ParentsElements}>
                    <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}> О нас</div>
                    <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}> ЕГэ</div>
                    <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}> Олимпиада</div>
                    <div className={props.isBurgerMenuOpened ? s.burgerParentEl: s.burgerParentElHidden}> ПЕНИС</div>
                </div>
        </div>
    )
}

export default PhysicsNavPage