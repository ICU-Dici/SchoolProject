import { connect } from "react-redux"
import {SelectBlockAc} from '../../../redux/NavigationReducer'
import NavigationSide from "./NavigationSide"







const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps, {SelectBlockAc})(NavigationSide)