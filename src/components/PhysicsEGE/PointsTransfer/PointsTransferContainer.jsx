import React from 'react'
import { connect } from 'react-redux'
import {ChangePointsAc, TransefPointsAc, DownPointsAc, UpPointsAc} from '../../../redux/PointsTransferReducer'
import PointsTransfer from './PointsTransfer'






const mapStateToProps = (state) =>{
    return {
        BeforePointsNow: state.PTRdom.BeforePointsNow,
        AfterPointsNow: state.PTRdom.AfterPointsNow
    }
}

export default connect(mapStateToProps, {ChangePointsAc, TransefPointsAc, DownPointsAc, UpPointsAc})(PointsTransfer)