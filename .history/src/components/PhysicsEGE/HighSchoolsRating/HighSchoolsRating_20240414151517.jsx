import React from "react"
import s from './HighSchoolsRating.module.css'
import University from "./University/University"











const HighSchoolsRating = (props) => {
    return (
        <div className={s.AheadWrapper}>
            {props.Universities.map(el => {
                return (<div>
                    <div className={el.id === 0 ? s.BackgroundImgMIPT: el.id === 1 ? s.BackgroundImgMEPHI : s.d}></div>
                    <University name={el.name} transcript={el.transcript} logo={el.logo} backgroundIMGStyle={el.backgroundIMGStyle} RussianRate={el.RussianRate} GlobalRate={el.GlobalRate} officialLink={el.officialLink} bestSpec={el.bestSpec} OtherSpec={el.OtherSpec}/>
                </div>)
            })}
        </div>
    )
}

export default HighSchoolsRating;

