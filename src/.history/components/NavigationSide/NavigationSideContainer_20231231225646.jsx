import { connect } from "react-redux"
import NavigationSide from "./NavigationSide"
import {SelectBlockAc} from '../../redux/PointsTransferReducer'






const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps, {SelectBlockAc})(NavigationSide)