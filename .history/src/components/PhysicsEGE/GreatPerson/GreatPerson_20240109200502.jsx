import React from "react"
import s from './GreatPerson.module.css'








const GreatPerson = () => {
    return (
        <div className={s.MainWrapper}>
            <div className={s.Person}>
                <img className={s.PersonImg} src='https://alpinabook.ru/upload/resize_cache/iblock/6f9/550_800_1/6f9f5be9fb84ad912ca92b5a0839d9ef.jpg'/>
                <div className={s.PersonIngo}>Альбе́рт Эйнште́йн (нем. Albert Einstein МФА: [ˈalbɐt ˈaɪ̯nʃtaɪ̯n](инф.)[C 1], 14 марта 1879, Ульм, королевство Вюртемберг, Германская империя — 18 апреля 1955, Принстон, штат Нью-Джерси, США) — американский, немецкий и швейцарский физик-теоретик и общественный деятель-гуманист, один из основателей современной теоретической физики. Лауреат Нобелевской премии по физике 1921 года. Его теория относительности изменила основания физики, заменив классическую механику и закон всемирного тяготения Ньютона. Персона XX века по версии журнала Time6.</div>
            </div>
            <div></div>
        </div>
    )
}


export default GreatPerson;