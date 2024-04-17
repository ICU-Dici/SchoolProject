import React from "react";
import s from './NavigationSide.module.css'
import { NavLink } from "react-router-dom";
import PhyBlockStructureContainer from "./Block/PhyBlockStructureContainer";




const NavigationSide = (props) =>{
    return (

        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.PhysicsPath} >
                    <div className={s.PhysicsLink1} 
                    onClick={() => {props.SelectBlockAc('/Physics/*')}}>
                        <PhyBlockStructureContainer index={'/Physics/*'} blockName={'Физика'} blockInfo={'10-11 Класс'}/>
                        </div>
                    <div className={s.PhysicsLink2} 
                    onClick={() => {props.SelectBlockAc('/Physics/PointsTransfer')}}>
                        <PhyBlockStructureContainer index={'/Physics/PointsTransfer'} blockName={'Физика'} blockInfo={'7-9 Класс'}/>
                        </div>
                </div>
                <div>
                    <NavLink to={props.selected}  className={s.ToTruePageWrapper}><div  className={s.ToTruePage}>ПРОДОЛЖИТЬ</div></NavLink>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;