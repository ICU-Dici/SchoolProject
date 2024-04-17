import React from "react"
import s from './Profile.module.css'








const Profile = (props) => {
    return (
        <div className={s.spec}><div title={props.trans}>{props.title}</div><div>Проходные Баллы:<div title={props.Subjects.first.trans}>{props.Subjects.first.kod}</div>/<div title={props.Subjects.second.trans}>{props.Subjects.second.kod}</div>{props.marks}</div></div>
    )
}


export default Profile;
