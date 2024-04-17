import React from "react"
import s from './GreatestPersons.module.css'
import GreatPerson from "./GreatPerson/GreatPerson"




<div className={s.closeBurgMenu}><span className={s.closeBurgMenuText}>&#10006;</span></div>





const GreatestPersons = (props) => {
    return (
        <div>
            { props.CurrentChoosenScientist === '' ? 
            <div className={s.NoBiographyWindowWrapper}>
            <div className={s.NoCurrentScientistsNameNoWindow}>{props.CurrentChoosenScientist.name}</div>
            <div className={s.NoBiographyWindow}>
            <div className={s.NocloseBurgMenu}  ><span onClick={props.CloseScientistsWindow} className={s.closeBurgMenuText}>&#10006;</span></div>
                <img className={s.ScientistWindowPhoto} src={props.CurrentChoosenScientist.photo}/>
            { props.CurrentChoosenScientist.MainInfo}
            </div>
            </div>
            : 
            <div className={s.BiographyWindowWrapper} oclick={props.CloseScientistsWindow}>
            <div className={s.CurrentScientistsNameNoWindow}>{props.CurrentChoosenScientist.name}</div>
            <div className={s.BiographyWindow}>
            <div className={s.closeBurgMenu} onClick={props.CloseScientistsWindow} ><span className={s.closeBurgMenuText}>&#10006;</span></div>
                <img className={s.ScientistWindowPhoto} src={props.CurrentChoosenScientist.photo}/>
            <div className={s.ShortInfo}>
                <p className={s.ScientistsName}>{props.CurrentChoosenScientist.name}</p>
                <ul>
                    {props.CurrentChoosenScientist.Discoveries.map(el => {
                        return (
                            <li className={s.discovery}>{el.title}</li>
                        )
                    })}
                </ul>
            </div>
            </div>
            </div>
            }
            <div className={s.MainWrapper}>
            {props.GreatPersons.map(pers => {
                return (
                    <div onClick={() => {props.ChooseCurrentScientis({name:pers.name, photo:pers.photo, MainInfo:pers.MainInfo, Discoveries:pers.Discoveries})}}><GreatPerson personPhoto={pers.photo} name={pers.name} type={pers.type}/></div>
                )
            })}
        </div>
        </div>
    )
}

export default GreatestPersons;

