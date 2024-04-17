import React from "react"
import s from './CurrentSubtopic.module.css'















const CurrentSubtopic = (props) => {
    return (
        <div>
            <div className={s.ParTitle}>{props.Title}</div>
            <div>{props.Text}</div>
        </div>
    )
}

export default CurrentSubtopic;