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
                        <div className={s.leadingSpec}><div>Компьютерные технологии и вычислительная техника 09.03.01</div><div>ЕГЭ: МРФ/МРИ=303</div></div>
                        <div className={s.NotLeadingSpec}>
                            <div className={s.spec}><div>Программная инженерия и компьютерные технологии</div><div>ЕГЭ:МРИ=293</div></div>
                            <div><div>Системное программирование и прикладная математика</div><div>ЕГЭ:МРИФ=385</div></div>
                            <div><div>Программная инженерия и компьютерные технологии</div><div>ЕГЭ:МРИ=293</div></div>
                            <div><div>Программная инженерия и компьютерные технологии</div><div>ЕГЭ:МРИ=293</div></div>
                            <div><div>Программная инженерия и компьютерные технологии</div><div>ЕГЭ:МРИ=293</div></div>
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