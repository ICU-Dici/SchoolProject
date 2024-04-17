import React from "react"






const PhysicsNavPage = () =>{
    return ( 
        <div>
            <div className={s.HeaderBurgerMenu}>
                    <div className={s.logoBurgMenu}>logo</div>
                    <div></div>
                    <div className={s.closeBurgMenu}>close</div>
                </div>
                <div className={s.ParentsElements}>
                    <div className={s.burgerParentEl}> О нас</div>
                    <div className={s.burgerParentEl}> ЕГэ</div>
                    <div className={s.burgerParentEl}> Олимпиада</div>
                    <div className={s.burgerParentEl}> ХУЙ</div>
                </div>
        </div>
    )
}

export default PhysicsNavPage