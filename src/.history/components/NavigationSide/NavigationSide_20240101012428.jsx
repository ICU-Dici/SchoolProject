import React from "react";
import s from './NavigationSide.module.css'
import { NavLink } from "react-router-dom";
import PhyBlockStructureContainer from "./Block/PhyBlockStructureContainer";




const NavigationSide = (props) =>{
    return (

        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.PhysicsPath} >
                    <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc('/Physics/*')}}><PhyBlockStructureContainer index={'/Physics/*'}/></div>
                    <div className={s.PhysicsLink} onClick={() => {props.SelectBlockAc('/Physics/PointsTransfer')}}><PhyBlockStructureContainer index={'/Physics/PointsTransfer'}/></div>
                </div>
                <div>
                    <NavLink to={props.selected} className={s.ToTruePage}><div>продолжить</div></NavLink>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;