import React from "react"
import s from './HighSchoolsRating.module.css'
import University from "./University/University"












const HighSchoolsRating = (props) => {
    return (
        <div className={s.AheadWrapper}>
            {props.Universities.map(el => {
                let backgroundIMGStyle = el.backgroundIMGStyle
                return (<div>
                    <div className={s.backgroundIMGStyle}></div>
                    <University name={el.name} transcript={el.transcript} logo={el.logo} backgroundIMGStyle={el.backgroundIMGStyle} RussianRate={el.RussianRate} GlobalRate={el.GlobalRate} officialLink={el.officialLink} bestSpec={el.bestSpec} OtherSpec={el.OtherSpec}/>
                </div>)
            })}
        </div>
    )
}

export default HighSchoolsRating;