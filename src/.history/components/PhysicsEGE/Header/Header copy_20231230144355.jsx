import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <img className={s.DecorImg1} src="https://lh3.googleusercontent.com/pw/ABLVV858tE5zP5dgrNzdu6XyWLzSs8A15KMBVBAeJea5m7Yp7A3xufnzrzUiugSn4e2yH3HMa0M2z1ux4HubSVDJw0nWbPkz9GVn-ROPrMmTbhaHUYrxUPof2amZULJhB6BxbApkQv2u51lkI1r3QoU_MNYb8MvZ-5g4rhe4xM-jsBciN9mJxzPufOnbp38NIk0GYdpQ-rDu53IEGUdQgE8PLtW67Mm3LLba0yeF_0WrxJUG8xbrVPGENbzNq8gtQ24yMJYYvg2zeaE4AsojnkFa6Ft8r_AU7DGE1JBc0IYTAJzKUz23gXKWxsc7QXisnbUbfcTbEjumwqeRy4euRhvTogLLZ032i_1mp3O3HiB5N1sWa3OrXQ-u41fPt7ysXsOKA8oAzuWwK2_JqxeQSke1o7ONIOVQoeBcH8igokZcfAeW2xwg1D_qpryUesKq6Rn3pXwG44hkzCz_WZYu8IV4zf7I00JRo3qub5UFqB5ywQ7vcsgluF0R3ODWpsTqMiCo9eG6o2BdvygrKsVd_UgckU1dlFfHT9n3JwouuLYoPFMPhgT2dpw2g9_NZHSTbRPVuwDEoLVdCASykCtLuqxYEL6RPQ0JKp0ZeGWm2C5f3ObqTN71EDS0dofej9E1Ny5b3p7tRm_OyhrgADWJyT3qf4fQy178_7EfzHbtrQc6-OxwpDre_zMRb2a2z8Ng0489XU0T2MWURdaDgZPrZMB0xUWkV6Ur4Ec69rMoZtcf7a8I0Eg7B2vFfl-e7yrO11JTiZL7LsUae3tuTHmD1vPCS6WjFGC21e3YZNGPUSNccYlwowbsH1H1z0lLw_uooeqiQyE9c_KXX1FDc2ID-E0Oa_ZpMWwGxLkLMBIdrS9fTGpqL7aXfkX7FmJCpGMgQ94fBqVxb0qmT9Le541RGuROCIrs8uj82sHBl-bmsVS8Cw=w429-h953-s-no-gm?authuser=0"/>
            <div className={s.MainBody}>
                <div className={s.MainInfo}>
                    <div className={s.PhysicParagraph}>Физика</div>
                    <div className={s.citatum}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</div>
                    </div>
                
            </div>
            
        </header>
        
    )
}

export default Header;