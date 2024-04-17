import React from "react";
import HomePhyPage from "./HomePhyPage/HomePhyPage";
import { Routes, Route } from "react-router-dom";
import PointsTransferContainer from "./PointsTransfer/PointsTransferContainer";
import s from './PhysicsEGE.module.css'
import PhysicsNavPageContainer from "./PhysicsNavPage/PhysicsNavPageContainer";
import GreatestPersonsContainer from "./GreatestPersons/GreatestPersonsContainer";
import PhysicsThemes from "./PhysicsThemes/PhysicsThemes";
import PhysicsThemesContainer from "./PhysicsThemes/PhysicsThemesContainer";
import About from "./About/About";
import HighSchoolsRating from "./HighSchoolsRating/HighSchoolsRating";
import HighSchoolsRatingContainer from "./HighSchoolsRating/HighSchoolsRatingContainer";



const PhysicsEGE = (props) => {
    return (
        <div className={s.AllWrapper}>
            <div className={props.isBurgerMenuOpened ? s.OnBurgerMenuWrap : s.OffBurgerMenuWrap}>
                <PhysicsNavPageContainer toggleBurgerMenuAc={props.toggleBurgerMenuAc} isBurgerMenuOpened={props.isBurgerMenuOpened} SetBackgroungColor={props.SetBackgroungColor}/>
            </div>
            <div className={s.burger} onClick={() => { props.toggleBurgerMenuAc(true) }}>
                <div className={s.BurgerText}>Menu</div>
                {window.screen.width >= 950  ? 
                <div>
                <div className={s.burgerDecorElOtherBg}></div>
                <div className={s.burgerDecorElOtherBg}></div>
                <div className={s.burgerDecorElOtherBg}></div>
            </div>:
                    <div>
                    <div className={props.backgroungColor ==='black' ?  s.burgerDecorElBlackBg:s.burgerDecorElOtherBg }></div>
                    <div className={props.backgroungColor ==='black' ?  s.burgerDecorElBlackBg:s.burgerDecorElOtherBg}></div>
                    <div className={props.backgroungColor ==='black' ?  s.burgerDecorElBlackBg:s.burgerDecorElOtherBg}></div>
                </div>}
            </div>
            <div>
                <Routes>
                    <Route path="/greatest-physicists/" element={<GreatestPersonsContainer/>}/>
                    <Route path="/themes/" element={<PhysicsThemesContainer/>}/>
                    <Route path="/about/" element={<About toggleBurgerMenuAc={props.toggleBurgerMenuAc} />} />
                    <Route path='/PointsTransfer/' element={<PointsTransferContainer />} />
                    <Route path='/High-Schools-rating/' element={<HighSchoolsRatingContainer />} />
                </Routes>
            </div>

        </div>
    )
}

export default PhysicsEGE;