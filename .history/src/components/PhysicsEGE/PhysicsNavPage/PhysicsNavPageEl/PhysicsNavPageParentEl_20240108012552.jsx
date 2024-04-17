import React from "react"
import s from './PhysicsNavPageParentEl.module.css'
import PhysicsNavPageChildEl from "./PhysicsNavPageChildEl"










const PhysicsNavPageParentEl = (props) => {
    const ArrayId = props.index - 1;
    return (
        <div>
            {props.selectedCase === 0 ?
                <div className={props.isBurgerMenuOpened ? s.burgerParentEl : s.burgerParentElHidden} onClick={() => { props.ChooseCaseAc(props.index, props.ChildCases, props.MainInfo, props.CurrentBackgroudImg) }}>{props.Name}</div>
                :
                <div className={props.selectedCase === props.index ? s.burgerParentElSelected : s.burgerParentElNotSelected} onClick={() => { props.ChooseCaseAc(props.index, props.ChildCases, props.MainInfo, props.CurrentBackgroudImg) }}>{props.Name}</div>}
            {props.selectedCase === props.index & props.phoneScreen === true ? 
            <div>

                <div className={props.ParentsCases[ArrayId].childContent === props.ChildCases ? s.ChildrenElements : s.ChildrenElementsHidden}>
                    <div className={s.ShortInfoChildBlock}>
                        <div className={s.TitleChildBlock}>{props.CaseContent[0]}</div>
                        <div className={s.ShortCommentChildBlock}>{props.CaseContent[1]}</div>
                    </div>
                    {props.ChildCases.map(Childitem => { return <PhysicsNavPageChildEl BackgroundColor={Childitem.BackgroundColor} content={Childitem.name} PathTo={Childitem.PathTo} CloseOnClick={props.CloseOnClick} /> }
                    )}
                </div>
            </div>
                : <div></div>
            }
        </div>
    )
}


export default PhysicsNavPageParentEl;


