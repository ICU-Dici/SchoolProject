import React from "react"
import s from './HighSchoolsRating.module.css'
import University from "./University/University"












const HighSchoolsRating = () => {
    return (
        <div className={s.AheadWrapper}>
            {props.Universities.map(el => {
                return (<div>
                    <div className={s.BackgroundImgMIPT}></div>
                    <University name={el.name} transcript={el.transcript}/>
                </div>)
            })}
        </div>
    )
}

export default HighSchoolsRating;