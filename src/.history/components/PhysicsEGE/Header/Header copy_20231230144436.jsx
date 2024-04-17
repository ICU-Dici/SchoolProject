import React from "react";
import s from './HeaderCopy.module.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    let path = '/Physics/PointsTransfer/'
    return(
        <header className={s.headerWrapper}>
            <img className={s.DecorImg1} src="https://lh3.googleusercontent.com/pw/ABLVV87bWTOqhGrbxprE9sknU7gvwT_-lztQMxmXkwjVe7jYiKyZLSNrmz_R6tQLVBHLlA9mytYs8aFWd4EzDHlovVNYe14lV34axImS5oJDfe2gyPJJ6ntZiF5rvY7785YF379_-khKeQtqOHeDA20QLTNE3I1KkY14uBZpj3zAWnie62_CxHm4Vs5ohmnNH-rkuPszxOM2ObsCOEHX7o6YEvPtKCReWEsW44EzvFYS5eqPhB9mHTjh8UWBO8c5YZ80_ySAHjXW_3W6WSyJkKgLFc9Nn05s3rhIo73L_FGptrky-ZYETBPZnLgvpuKzaTOsl3IMp1Huq6J2vZFYBFssA0uLtv6ngwU4OTgJrpCsUOK4QVxvUwKWJIsOp0qjnUiaUeQ4521b5N36sNSZbmLngh4U3Cd6TfA_TsQRu41jQOrFZ7VQYlhTvS35UU5yIdKbHiGIuDXzqqnugH_BHyMfKigDPgZhaReh_z1VqtgwWq9EWZyARx8a28qj12y1eWky7i9mpqgmWjl0WC6cnSgDEFrJk9xgViOWy4So8G5ggzW1rcbvjqzgeCFUopi0tjZ3W61oMy3nkgCXwRMtX18PQwp0E83dSyDZxyaaH--FX2u-8XxFbYm2ZIJwgiOvjpEZWhS-ThRVCZRzng0Te6_BpMR_0cgym4oy-UCUFj7qiYzwEB4SWtRNY5MqLDMhv1m-zG9nBCw7fq6GEESFsOcuFglFpJd1R5wgsxnsQtyNkBO8FkYw3Vz_DiBMckZ6Bf6-d0VYfSX2UDLRIv119jvWzNeOz-BxwBz_5lLfOGEDm4oAXsn8_-rd3eJy-sGgnBckkyCVjlqZDzAks_RNaNpo29txs_68L26EuNkp-E1EkDf42XNuj6xMjR0bLMbOJoE38vRyX7awZxiNHlq-p1-vluTmnSeYzxJ1MKyWKu0sgw=w713-h953-s-no-gm?authuser=0"/>
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