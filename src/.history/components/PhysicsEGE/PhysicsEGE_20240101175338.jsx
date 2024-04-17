import React from "react";
import Header from "./Header/Header copy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointsTransfer from "./PointsTransfer/PointsTransfer";
import PointsTransferContainer from "./PointsTransfer/PointsTransferContainer";




const PhysicsEGE = () =>{
    return (
        <div>
            <div className={s.burgerMenuWrap}>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div><Header/></div>
            <div>
            <Routes>
                <Route path='/PointsTransfer/' element={<PointsTransferContainer/>}/>
            </Routes>
            </div>

        </div>
    )
}


export default PhysicsEGE;