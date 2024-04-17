import React from "react";
import s from './NavigationSide.module.css'
import { NavLink } from "react-router-dom";
import PhyBlockStructureContainer from "./Block/PhyBlockStructureContainer";




const NavigationSide = (props) =>{
    return (

        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.PhysicsPath} >
            <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc(1)}}><PhyBlockStructureContainer id={1}/></div>
            <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc(2)}}><PhyBlockStructureContainer id={2}/></div>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;