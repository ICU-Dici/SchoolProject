import React from "react";
import s from './NavigationSide3.module.css'
import BlockStructure from "./Block/BlockStructure";
import { NavLink } from "react-router-dom";




const NavigationSide = (props) =>{
    return (
        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.PhysicsPath} >
            <div className={s.PhysicsLink} onClick={props.SelectBlockAc}><BlockStructure/></div>
            <NavLink to='/Physics'><div className={s.PhysicsLink}><BlockStructure/></div></NavLink>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;