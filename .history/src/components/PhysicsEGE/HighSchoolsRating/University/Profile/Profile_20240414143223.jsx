import React from "react"









const Profile = (props) => {
    return (
        <div className={s.spec}><div title={props.trans}>{props.title}</div><div>Проходные Баллы:<div title={props.trans1}>{props.kod1}</div>/<div title={props.trans2}>{props.kod2}</div>{props.marks}</div></div>
    )
}


export default Profile;