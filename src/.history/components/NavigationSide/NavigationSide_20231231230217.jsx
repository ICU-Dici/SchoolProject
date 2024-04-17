import React from "react";
import s from './NavigationSide.module.css'
import BlockStructure from "./Block/BlockStructure";
import { NavLink } from "react-router-dom";




const NavigationSide = (props) =>{
    return (

        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.PhysicsPath} >
            <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc(1)}}><BlockStructure/></div>
            <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc(2)}}><BlockStructure/></div>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;