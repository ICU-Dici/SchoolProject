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
                        <div><div className={s.Name}>Нерешенные проблемы</div>
                            <div className={s.shortInfo}></div>
                        </div>
                        <div><div className={s.Name}>Промышленная физика</div>
                        <div className={s.shortInfo}></div>
                        </div>
                        <div><div className={s.Name}>Глобальные проекты</div>
                        <div className={s.shortInfo}></div>
                        </div>
                        <div><div className={s.Name}>История физики</div>
                        <div className={s.shortInfo}></div>
                        </div>
                        <div><div className={s.Name}>Научное сообщество</div>
                        <div className={s.shortInfo}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;