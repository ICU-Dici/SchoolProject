import React from "react"
import s from './PhysicsNavPage.module.css'
import PhysicsNavPageParentEl from "./PhysicsNavPageEl/PhysicsNavPageParentEl"
import PhysicsNavPageChildEl from "./PhysicsNavPageEl/PhysicsNavPageChildEl"
import { NavLink } from "react-router-dom"





const PhysicsNavPage = (props) => {
    const CloseOnClick = (color) => {
        props.ChooseCaseAc(0, [], [], '')
        props.toggleBurgerMenuAc(false)
        props.SetBackgroungColor(color)
    }
    return (
        <div className={s.burgerMenuWrap}>   <div className={props.CurrentBackgroudImg === '' ? s.NoBackgroudDivImg : s.BackgroudDivImg}><img className={props.CurrentBackgroudImg === '' ? s.NoBackgroudImg : s.BackgroudImg} src={props.CurrentBackgroudImg} /></div>
            <div className={s.HeaderBurgerMenu}>
                <NavLink to='/Physics/about' className={s.logoBurgMenuLink} onClick={() => {CloseOnClick('black')}}><div className={s.logoBurgMenu}>logo</div></NavLink>
                <div></div>
                <div className={s.closeBurgMenu} onClick={CloseOnClick}><span className={s.closeBurgMenuText}>close</span> <span className={s.closeBurgMenuSymbol}>&#10006;</span></div>
            </div>
            <div className={s.interactionWrapper}>

                <div className={s.ParentsElements}>
                    {window.screen.width >= 1182 ?
                        <div>
                            {props.ParentsCases.map(item => { return <PhysicsNavPageParentEl CloseOnClick={CloseOnClick} phoneScreen={false} CurrentBackgroudImg={item.img != '' ? item.img : ''} CaseContent={props.CaseContent} isBurgerMenuOpened={props.isBurgerMenuOpened} Name={item.Name} selectedCase={props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={item.index} ChildCases={item.childContent} MainInfo={item.MainInfo} ParentsCases={props.ParentsCases} /> })}
                        </div>
                        :
                        <div>
                            {props.ParentsCases.map(item => { return <PhysicsNavPageParentEl CloseOnClick={CloseOnClick} phoneScreen={true} CurrentBackgroudImg={item.img != '' ? item.img : ''} CaseContent={props.CaseContent} isBurgerMenuOpened={props.isBurgerMenuOpened} Name={item.Name} selectedCase={props.selectedCase} ChooseCaseAc={props.ChooseCaseAc} index={item.index} ChildCases={item.childContent} MainInfo={item.MainInfo} ParentsCases={props.ParentsCases} /> })}
                        </div>}

                </div>
                <div>
                    {window.screen.width >= 1182 ? 
                    <div>
                        {props.ParentsCases.map(item => {
                        return (
                            <div className={item.childContent === props.ChildCases ? s.ChildrenElements : s.ChildrenElementsHidden}>
                                <div className={s.ShortInfoChildBlock}>
                                    <div className={s.TitleChildBlock}>{props.CaseContent[0]}<span className={s.arrow_2}></span></div>
                                    <div className={s.ShortCommentChildBlock}>{props.CaseContent[1]}</div>
                                </div>
                                {props.ChildCases.map(Childitem => { return <PhysicsNavPageChildEl BackgroundColor={Childitem.BackgroundColor} content={Childitem.name} PathTo={Childitem.PathTo} CloseOnClick={CloseOnClick} /> }
                                )}
                            </div>)
                    }

                    )}
                    </div>: <div></div>}
                    
                </div>
                <div> </div>
            </div>
        </div>
    )
}

export default PhysicsNavPage;


