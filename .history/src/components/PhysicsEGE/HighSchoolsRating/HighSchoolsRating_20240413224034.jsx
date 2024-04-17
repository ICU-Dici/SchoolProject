import React from "react"
import s from './HighSchoolsRating.module.css'












const HighSchoolsRating = () => {
    return (
        <div>
            <div>
                <div className={s.MainCenterInfo}>
                    <div className={s.LogoUniversity}><img src="https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png" /></div>
                    <div className={s.UniversityName}>МФТИ (Московский Физико-Технический Институт)</div>
                </div>
            </div>
        </div>
    )
}

export default HighSchoolsRating;