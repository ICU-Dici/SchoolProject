import React from "react";
import s from './HomePhyPage.module.css'

const HomePhyPage = (props) =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            {/* <div className={s.MainBody}>
                
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                </div>
                
            </div> */}
            <div className={s.contentWrapper}>
                <div className={s.PageNavigation}>
                </div>
            </div>
        </header>
        
    )
}

export default HomePhyPage;