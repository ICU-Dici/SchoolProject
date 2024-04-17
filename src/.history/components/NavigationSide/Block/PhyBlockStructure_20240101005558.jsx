import React from "react"
import s from './PhyBlockStructure.module.css'


const BlockStructure = (props) =>{
    return (
        <div className={s.Wrapper}>            
            <div className={s.Block}>
                <div className={s.parHead}>
                    <div className={s.par2}></div>
                    <div className={s.par3}></div>
                    <div className={s.par4}></div>
                </div>
                <div className={ props.selected === props.id ? s.MainBodyBlockACtive : s.MainBodyBlock}>
                    <div>Физика</div>
                    <div>10-11 класс</div>
                </div>
            </div>
        </div>
    )
}

export default BlockStructure;