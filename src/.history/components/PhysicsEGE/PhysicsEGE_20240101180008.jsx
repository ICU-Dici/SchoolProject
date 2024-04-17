import React from "react";
import Header from "./Header/Header copy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointsTransfer from "./PointsTransfer/PointsTransfer";
import PointsTransferContainer from "./PointsTransfer/PointsTransferContainer";
import s from './PhysicsEGE.module.css'



const PhysicsEGE = () =>{
    return (
        <div>
            <div className={s.burgerMenuWrap}>
                <div>
                    <div className={s.burgerParentEl}> О нас</div>
                    <div className={s.burgerParentEl}> ЕГэ</div>
                    <div className={s.burgerParentEl}> Олимпиада</div>
                    <div className={s.burgerParentEl}> ХУЙ</div>
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