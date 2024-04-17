import React from "react"
import s from './PhyBlockStructure.module.css'


const BlockStructure = (props) =>{
    return (
        <div className={s.Wrapper}>            
            <div className={s.Block}>
                { props.typeOfBloc===1 ? 
                <div className={ props.selected === props.index ? s.MainBodyBlockActive : s.MainBodyBlock1}>
                <div>{props.blockName}</div>
                <div>{props.blockInfo}</div>
            </div> 
            : <div className={ props.selected === props.index ? s.MainBodyBlockActive : s.MainBodyBlock2}>
                <div>{props.blockName}</div>
                <div>{props.blockInfo}</div>
                </div> 
            //     : props.typeOfBloc===3 ? <div className={ props.selected === props.index ? s.MainBodyBlockActive : s.MainBodyBlock}>
            //     <div>{props.blockName}</div>
            //     <div>{props.blockInfo}</div>
            //     </div> : <div className={ props.selected === props.index ? s.MainBodyBlockActive : s.MainBodyBlock}>
            //     <div>{props.blockName}</div>
            //     <div>{props.blockInfo}</div>
            // </div> 
            }
            </div>
        </div>
    )
}

export default BlockStructure;