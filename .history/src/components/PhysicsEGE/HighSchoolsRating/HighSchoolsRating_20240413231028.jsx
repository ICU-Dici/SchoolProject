import React from "react"
import s from './HighSchoolsRating.module.css'












const HighSchoolsRating = () => {
    return (
        <div className={s.AheadWrapper}>
            <div className={s.Wrapper}>
                <div className={s.BackgroundImg}></div>
                <div className={s.Specialities}></div>
                <div className={s.MainCenterInfoWrapper}>
                <div className={s.MainCenterInfo}>
                    <div><img className={s.LogoUniversity} src="https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png" /></div>
                    <div className={s.UniversityName}>МФТИ <br/>(Московский Физико-Технический Институт)</div>
                </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HighSchoolsRating;