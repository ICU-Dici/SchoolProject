import React from "react"
import s from './BlockStructure4.module.css'


const BlockStructure = () =>{
    return (
        <div className={s.Wrapper}>            
            <div className={s.Block}>
                <div className={s.parHead}>
                    <div className={s.par2}></div>
                    <div className={s.par3}></div>
                    <div className={s.par4}></div>
                </div>
                <button className={s.MainBodyBlock}>
                    <div>Физика</div>
                    <div>10-11 класс</div>
                </button>
            </div>
        </div>
    )
}

export default BlockStructure;