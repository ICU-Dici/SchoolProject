import React from "react"
import s from './About.module.css'








<div><div>Научное сообщество</div>
                            <div></div>
                        </div>






const About = (props) => {
    return (
        <div className={s.AheadWrapper}>
            <div className={s.BackgroundImage}></div>
            <div className={s.firstSlide}>
                <div className={s.MainText}><div className={s.Title}>СОВРЕМЕННАЯ ФИЗИКА</div>- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet nec justo sed porttitor. Ut molestie quam risus, eu tristique nisi aliquam fringilla. Aliquam condimentum diam non sollicitudin fermentum. Pellentesque auctor risus sed magna porta, in imperdiet magna convallis. Aliquam erat volutpat. Sed mollis finibus justo ut tincidunt. Cras rutrum tellus sed arcu hendrerit porttitor.</div>
                <div className={s.Navigation}>
                    <div className={s.NavigationUL}>
                        <div><div className={s.Name1}>Нерешенные проблемы</div>
                            <span className={s.shortInfo1}>Здесь вы вкратце узнаете в чем заключается проблема так называемой "стрелы времени", о теоретических проблемах и неизученных областых эксперементальной физике</span>
                        </div>
                        <div><div className={s.Name2}>Промышленная физика</div>
                        <span className={s.shortInfo2}>Использование зананий физики в соврменном мире и промышленном прозводстве, сферы промышленности, которые производят продукт на основе физических законов</span>
                        </div>
                        <div><div className={s.Name3}>Глобальные проекты</div>
                        <span className={s.shortInfo3}>Готовящися глобальные проекты, двигающие науку и технологический прогресси, такие как: Создание первой термоядерной электростанции, первая экспедиция на Марс и др.</span>
                        </div>
                        <div><div className={s.Name4}>История физики</div>
                        <span className={s.shortInfo4}>От физики аристотеля до технологической революции физики XX века</span>
                        </div>
                        <div><div className={s.Name5}>Научное сообщество</div>
                        <span className={s.shortInfo5}>Современные ученые, состоящие в научном сообществе</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;