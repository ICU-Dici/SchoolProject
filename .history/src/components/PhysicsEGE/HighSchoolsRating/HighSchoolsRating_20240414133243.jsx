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
                        <div className={s.leadingSpec}><div>1.Компьютерные технологии и вычислительная техника 09.03.01</div><div>ЕГЭ: МРФ/МРИ=303 балла</div></div>
                        <div className={s.NotLeadingSpec}>
                            <div><div>2.Программная инженерия и компьютерные технологии</div><div>ЕГЭ:МРИ=293 балла</div></div>
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
                <div className={s.Ratings}>
                    <div className={s.CountryRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>6</div> <div className={s.text}>Место В РОССИИ</div></div>
                    <div className={s.GlobalRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>300</div> <div className={s.text}>МЕСТо В СТРАНЕ</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default HighSchoolsRating;