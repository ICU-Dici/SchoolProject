import React from "react";
import Header from "./Header/Header copy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointsTransfer from "./PointsTransfer/PointsTransfer";
import PointsTransferContainer from "./PointsTransfer/PointsTransferContainer";
import s from './PhysicsEGE.module.css'
import PhysicsNavPageContainer from "./PhysicsNavPage/PhysicsNavPageContainer";



const PhysicsEGE = (props) =>{
    return (
        <div>
            <div className={props.isBurgerMenuOpened ? s.OnBurgerMenuWrap : s.OffBurgerMenuWrap}>
                <PhysicsNavPageContainer toggleBurgerMenuAc={props.toggleBurgerMenuAc} isBurgerMenuOpened={props.isBurgerMenuOpened}/>
            </div>
            <div><Header toggleBurgerMenuAc={props.toggleBurgerMenuAc}/></div>
            <div>
            <Routes>
                <Route path='/PointsTransfer/' element={<PointsTransferContainer/>}/>
            </Routes>
            </div>

        </div>
    )
}


export default PhysicsEGE;