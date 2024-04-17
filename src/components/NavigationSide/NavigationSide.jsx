import React from "react";
import s from './NavigationSide.module.css'
import { NavLink } from "react-router-dom";
import PhyBlockStructureContainer from "./PhysicsBlock/PhyBlockStructureContainer";
import MathBlockStructure from "./MathBlock/MathBlockStructure";
import MathBlockStructureContainer from "./MathBlock/MathBlockStructureContainer";




const NavigationSide = (props) =>{
    return (

        <div className={s.AheadWrapper}>
            <div className={s.NavBlocksWrapper}>
                <div className={s.Path} >
                    <div className={s.PhysicsLink} 
                    onClick={() => {props.SelectBlockAc('/Physics/about')}}>
                        <PhyBlockStructureContainer index={'/Physics/about'} blockInfo={'10-11 Класс'}/>
                        </div>
                    <div className={s.PhysicsLink} 
                    onClick={() => {props.SelectBlockAc('/Physics/PointsTransfer')}}>
                        <PhyBlockStructureContainer index={'/Physics/PointsTransfer'} blockInfo={'7-9 Класс'}/>
                        </div>
                </div>
                <div>
                    <NavLink to={props.selected}  className={s.ToTruePageWrapper}><div  className={s.ToTruePage}>ПРОДОЛЖИТЬ</div></NavLink>
                </div>
                <div className={s.Path}>
                    <div className={s.MathLink} onClick={() => {props.SelectBlockAc('/HighMath/*')}}>
                        <MathBlockStructureContainer index={'/HighMath/*'} blockInfo={'10-11 Класс'}/>
                    </div>
                    <div className={s.MathLink} onClick={() => {props.SelectBlockAc('/Math/*')}}>
                        <MathBlockStructureContainer index={'/Math/*'} blockInfo={'7-9 Класс'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NavigationSide;