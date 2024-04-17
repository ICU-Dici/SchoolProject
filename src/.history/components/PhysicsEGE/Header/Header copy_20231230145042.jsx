import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <div className={s.MainBody}>
            <img className={s.DecorImg1} src="https://lh3.googleusercontent.com/pw/ABLVV87VSmqimy26WafU_txSXtAjCENK6aIalOO_aV0jKp7rutp38S1md5CuuQWApipGW5J7eAqEOTKkmoDR5oTs2oF-KzCQ87ofYuyk1V91GFEDK5Cv3KuoYebrLb63by2AJ0Z1FwTy7twkylVauqyoBk9ACmuROn5yJcSMrS6PtjzB7Mm78MGjBeXwuHzry-lpR7BWzNvdo4TO41WHp9RnkZ1CzjRFTJDw_s-5sRocDom-WFa-qAmlX7zsNn4NnKjD7l81RoyAsiMn1ebyUFwthnvYlwEvH34Qw11kotOUPVcr1u7U5146DFGoqQSmp7Zehq0C2ihV1GTBKHdQxy7dvdxFYYmvFeYw73ZQT3Nv9TlRnWFLISakrTUM1BvTRbq4Dlh9Fs4wrhVpyedPh8Aph6_BnUn65zmwLeO2-f54s_W8raQSU8NDbHhrplibDL-wlcVOxPzDr0d3A1SXL6_Frq-3u2F8Vhg52F_ifbNhYPyurnMfvW00Pjvjr5mTm4tHh1hD4lnbqnJxChYebuIHotQuQv47Alx-fNLX17vTl-VvITLGCBXE1mTNkiztu1pIZAR9DxKKV30y0VFBVh92X-5ZGUPvj1lFISGzH1D2VrhnFZ_kAPREvbiaF8XMIA3PLXaHvNeGUhWqBuyRo0wKMZJlsMfbro-N4k788mSh7lz52jStPaI7dbiDMgs9HAK6tR8zjszkMeLpiv_aHfDk2wQMhUXNsbY_xVsZK5-mPWO-r5yUME1GfnF2EIgWAFR8PprUn1zrKpFdlu7N3vmipqJv9am9OlQOOumx0tarFjdn3o_NgQe40uGCAMQE9rXvOZdPISd-KHIsNF_EnscywTfocUfxUBnAXELsHzuVJBER5MpNjPkFT5zawAfj83uy7YBB9PS488hiLa7t2Z1zm0xHQ7lKe3VaVS-a8y62oA=w400-h220-s-no-gm?authuser=0"/>
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                    </div>
                
            </div>
            
        </header>
        
    )
}

export default Header;