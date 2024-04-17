import React from "react"
import s from './HighSchoolsRating.module.css'












const HighSchoolsRating = () => {
    return (
        <div className={s.AheadWrapper}>
            <div className={s.BackgroundImg}></div>
            <div className={s.Wrapper}>
                <div className={s.Specialities}>
                    <div className={s.SpecsTitle}>Ведущие программы:</div>
                    <div>
                        <div className={s.leadingSpec}>1.Ведущая программа сумма баллов:1000</div>
                        <div className={s.NotLeadingSpec}>
                            <div>2.Программист</div>
                            <div>3.Физик</div>
                            <div>4.Математик</div>
                            <div>5.Электронщик</div>
                            <div>6.Атомщик</div>
                        </div>
                    </div>
                </div>
                <div className={s.MainCenterInfoWrapper}>
                <div className={s.MainCenterInfo}>
                    <div><img className={s.LogoUniversity} src="https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png" /></div>
                    <div className={s.UniversityName}>МФТИ <br/><div className={s.transcript}>(Московский Физико-Технический Институт)</div></div>
                </div>
                </div>
                <div>
                    <div className={s.CountryRating}>НА 6 МЕСТЕ В РОССИИ</div>
                    <div className={s.GlobalRating}>НА 300 МЕСТЕ В СТРАНЕ</div>
                </div>
            </div>
        </div>
    )
}

export default HighSchoolsRating;