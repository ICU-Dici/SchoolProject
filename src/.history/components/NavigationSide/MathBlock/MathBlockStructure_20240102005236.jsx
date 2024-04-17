import React from "react"
import s from './PhyBlockStructure.module.css'


const BlockStructure = (props) =>{
    return (
        <div className={s.Wrapper}>            
            <div className={s.Block}>
                <div className={ props.selected === props.index ? s.MainBodyBlockActive : s.MainBodyBlock}>
                    <div>Математика</div>
                    <div>{props.blockInfo}</div>
                </div>
            </div>
        </div>
    )
}

export default BlockStructure;