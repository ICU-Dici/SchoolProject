import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <img className={s.DecorImg1} src="https://lh3.googleusercontent.com/pw/ABLVV87uXuJirFJBeRF8hCFM4QwFl3_mhHKf4-fgKchPhN3IiwS8kdYuRYrqLKecRJICESgO5q6FE9E_3icBsvw8PSqtR9Pfs3srD5egk_keoLcx6yc1L6mCbm3BYyKqe6uKLeOEYmtMZzqA3PHkug8rcjV9lVMdLibPkG5L1OCfQTyYH8KRjlO15qzWD-vkeVcAsTuFL3mz74vEPF9Sn9bPoqq8KaKEO2C1rce1zJuZCryWa9fMzGCx9FK1R2SALPoUcuYUcBGgwWOm4Uaa-e_KXKLmPUb1Ncurq7tiuMKhhn5LqERrfC-VQa_4FUHflEpiPdcE9gxQHiH63wqnvqwkzxa9D3MlpyicEE2ZpM5l-S5-bzwcgrbMlxYc7oK7MaBPIiV8E5n9GaVA8xLGwPWLP-S3B2UfBCzlsl0uUlWs6FQfwgl-T8PJTIElOZnWVWj9u13CGkgcYlOse4LQYjwDG8ps3FuJdyFsMa1oNnNsFxTGcbj-zaguJ2_GABRJFPItyZHqGSiPi43eETqpzDrplkrWXA-74HiK5sdnzxEUp08BVkpwy3FHbFpDfYHTqKvozhWSwMhUs0NVMtCQDjOs-OCGOSXm26sUNF6M_cR_VJkk50gEn9J1A4_xGjrOyBlcUWh0_nBvEMmU_dwKz7N83VPwzMMQzr1pfi9EFE69CsGap51Li6aHTtlU-stD_meqipDui0_Lc9s-wFTpFiGedRZTeVndF2L1Bqm4E8m45IsGEdkHCeTW-MOflDCtYpo_rqcJOSvNxwzBff7c_mJl15ZnOwkmXz20MgWyZsOrTvYfJz_BQ9WjZNAI7awubavG8-F2YwDWl8hy_1a8J1poi6IdBQeIlKDEGJpmz7WLmxWDi3rChx30GCl9qwSUWBc2gV7mGXTAq_1WLnfJVKTdS9-wtWdqQrZYiQFmTHb5_Q=w400-h220-s-no-gm?authuser=0"/>
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