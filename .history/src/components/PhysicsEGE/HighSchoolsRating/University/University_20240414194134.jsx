import React from "react";
import s from './University.module.css'
import Profile from "./Profile/Profile";














const University = (props) => {
    return (
        <div>
            <div className={s.Wrapper}>
                <div className={s.Specialities}>
                    <div className={s.SpecsTitle}>Ведущие программы:</div>
                    <div>
                        <div className={s.NotLeadingSpec}>
                            {props.OtherSpec.map(el => {
                                return <Profile title={el.title} id={el.id} Subjects={el.Subjects}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className={s.MainCenterInfoWrapper}>
                <div className={s.MainCenterInfo}>
                    <div className={s.LogoWrap}><img className={s.LogoUniversity} src={props.logo} /></div>
                    <div className={s.UniversityName}>{props.name}<br/><div className={s.transcript}>{props.transcript}</div></div>
                </div>
                </div>
                <a className={s.href} href={props.officialLink}><div className={s.RealWebSiteLink}>ОФИЦИАЛЬНЫЙ САЙТ</div></a>
                <div className={s.Ratings}>
                    <div className={s.CountryRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>{props.RussianRate}</div> <div className={s.text}>Место В РОССИИ</div></div>
                    <div className={s.GlobalRating}><img className={s.RatingIMG} src='https://i.pinimg.com/564x/b7/dd/f8/b7ddf86be87e37fd7d7ed9fcd7c5b012.jpg'/> <div className={s.Number}>{props.GlobalRate}</div> <div className={s.text}>МЕСТо В СТРАНЕ</div></div>
                </div>
            </div>
        </div>
    )
}

export default University;