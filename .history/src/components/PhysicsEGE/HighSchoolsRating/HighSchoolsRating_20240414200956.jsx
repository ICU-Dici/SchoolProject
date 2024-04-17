import React from "react"
import s from './HighSchoolsRating.module.css'
import University from "./University/University"











const HighSchoolsRating = (props) => {
    return (
        <div className={s.AheadWrapper}>
            {props.Universities.map(el => {
                return (<div className={s.AheadWrapper1}>
                    <div className={el.id === 0 ? s.BackgroundImgMIPT: el.id === 1 ? s.BackgroundImgMEPHI : el.id ===2 ? s.itmo : el.id===3 ? s.mgu : s.as}></div>
                    <University name={el.name} transcript={el.transcript} logo={el.logo} backgroundIMGStyle={el.backgroundIMGStyle} RussianRate={el.RussianRate} GlobalRate={el.GlobalRate} officialLink={el.officialLink} bestSpec={el.bestSpec} OtherSpec={el.OtherSpec}/>
                </div>)
            })}
        </div>
    )
}

export default HighSchoolsRating;

