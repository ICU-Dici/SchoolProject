import React from "react"
import s from './GreatPerson.module.css'








const GreatPerson = (props) => {
    return (
        <div className={s.MainWrapper}>
            <div className={s.Person}>
                <div className={s.PersonName}>{props.name}</div>
                <div className={s.hoverInfo}>
                    <div className={s.hoverName}>{props.name}</div>
                    <div className={s.hoverShortInfo}>{props.Type}</div>
                </div>
                <div className={s.PersonIngDiv}><img className={s.PersonImg} src={props.personPhoto}/></div>
            </div>
        </div>
    )
}


export default GreatPerson;