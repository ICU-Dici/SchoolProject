import React from "react"
import s from './Profile.module.css'








const Profile = (props) => {
    return (
        <div className={s.spec}><div title={props.trans}>{props.title}</div><div>Проходные Баллы:<div className={s.marks1} title={props.Subjects.first.trans}>{props.Subjects.first.kod}</div><div className={s.marks2} title={props.Subjects.second.trans}>{props.Subjects.second.kod}</div>{props.Subjects.marks}</div></div>
    )
}


export default Profile;
