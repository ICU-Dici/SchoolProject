import React from "react"
import s from './PhysicsNavPage.module.css'
import PhysicsNavPageEl from "./PhysicsNavPageEl/PhysicsNavPageEl"





const PhysicsNavPage = (props) =>{
    const CloseOnClick = () => {
        props.ChooseCaseAc(0)
        props.toggleBurgerMenuAc(false)
    }
    return ( 
        <div>
            <div className={s.HeaderBurgerMenu}>
                    <div className={s.logoBurgMenu}>logo</div>
                    <div></div>
                    <div className={s.closeBurgMenu} onClick={CloseOnClick}>close</div>
                </div>
                <div className={s.ParentsElements}>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened} Content={''} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={1}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'Все о ЕГЭ'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={2}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'Поступление в ВУЗы'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={3}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'Олимпиады'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={4}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'Рекомендации по подготовке'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={5}/>
                    <PhysicsNavPageEl isBurgerMenuOpened={props.isBurgerMenuOpened}Content={'О нас'} selectedCase= {props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={6}/>
                </div>
        </div>
    )
}

export default PhysicsNavPage