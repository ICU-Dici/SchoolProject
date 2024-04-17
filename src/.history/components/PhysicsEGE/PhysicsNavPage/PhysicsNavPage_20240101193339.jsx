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
                    <div className={s.burgerParentEl}> О нас</div>
                    <div className={s.burgerParentEl}> ЕГэ</div>
                    <div className={s.burgerParentEl}> Олимпиада</div>
                    <div className={s.burgerParentEl}> ПЕНИС</div>
                </div>
        </div>
    )
}

export default PhysicsNavPage