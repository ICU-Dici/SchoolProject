import React from "react"
import s from './About.module.css'















const About = (props) => {
    return (
        <div>
            <div className={s.firstSlide}>
                <div>СОВРЕМЕННАЯ ФИЗИКА- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet nec justo sed porttitor. Ut molestie quam risus, eu tristique nisi aliquam fringilla. Aliquam condimentum diam non sollicitudin fermentum. Pellentesque auctor risus sed magna porta, in imperdiet magna convallis. Aliquam erat volutpat. Sed mollis finibus justo ut tincidunt. Cras rutrum tellus sed arcu hendrerit porttitor.</div>
                <div>
                    <ul>
                        <li>Нерешенные проблемы</li>
                        <li>Промышленная физика</li>
                        <li>Ближайшие глобальные проекты</li>
                        <li>Нерешенные проблемы</li>
                        <li>Нерешенные проблемы</li>
                        <li>Нерешенные проблемы</li>
                        <li>Нерешенные проблемы</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;