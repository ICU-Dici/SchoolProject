import React from "react";
import s from './University.module.css'














const University = (props) => {
    return (
        <div>
            <div className={s.Wrapper}>
                <div className={s.Specialities}>
                    <div className={s.SpecsTitle}>Ведущие программы:</div>
                    <div>
                        <div className={s.leadingSpec}><div>{props.bestSpec.title}</div><div>Проходные Баллы:<div title={props.bestSpec.Subjects.first.trans}>{props.bestSpec.Subjects.first.kod}</div>/<div title={props.bestSpec.Subjects.second.trans}>{props.bestSpec.Subjects.second.kod}</div>{props.bestSpec.Subjects.marks}</div></div>
                        <div className={s.NotLeadingSpec}>
                            
                        </div>
                    </div>
                </div>
                <div className={s.MainCenterInfoWrapper}>
                <div className={s.MainCenterInfo}>
                    <div><img className={s.LogoUniversity} src="https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png" /></div>
                    <div className={s.UniversityName}>МФТИ <br/><div className={s.transcript}>(Московский Физико-Технический Институт)</div></div>
                </div>
                </div>
                <a className={s.href} href="https://mipt.ru/"><div className={s.RealWebSiteLink}>ОФИЦИАЛЬНЫЙ САЙТ</div></a>
                <div className={s.Ratings}>
                    <div className={s.CountryRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>6</div> <div className={s.text}>Место В РОССИИ</div></div>
                    <div className={s.GlobalRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>300</div> <div className={s.text}>МЕСТо В СТРАНЕ</div></div>
                </div>
            </div>
        </div>
    )
}

export default University;