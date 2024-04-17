import React from "react"
import s from './GreatestPersons.module.css'
import GreatPerson from "./GreatPerson/GreatPerson"




<div className={s.closeBurgMenu}><span className={s.closeBurgMenuText}>&#10006;</span></div>






const GreatestPersons = (props) => {
    return (
        <div>
            { props.CurrentChoosenScientist === '' ? 
            <div className={s.NoBiographyWindowWrapper}>
            <div className={s.NoBiographyWindow}>
                <img className={s.ScientistWindowPhoto} src={props.CurrentChoosenScientist.photo}/>
            { props.CurrentChoosenScientist.MainInfo}
            </div>
            </div>
            : 
            <div className={s.BiographyWindowWrapper} oclick={props.CloseScientistsWindow}>
            <div className={s.BiographyWindow}>
            <div className={s.closeBurgMenu} onClick={props.CloseScientistsWindow} ></div>
                <img className={s.ScientistWindowPhoto} src={props.CurrentChoosenScientist.photo}/>
            { props.CurrentChoosenScientist.MainInfo}
            </div>
            </div>
            }
            <div className={s.MainWrapper}>
            {props.GreatPersons.map(pers => {
                return (
                    <div onClick={() => {props.ChooseCurrentScientis({name:pers.name, photo:pers.photo, MainInfo:pers.MainInfo})}}><GreatPerson personPhoto={pers.photo} name={pers.name} type={pers.type}/></div>
                )
            })}
        </div>
        </div>
    )
}

export default GreatestPersons;

