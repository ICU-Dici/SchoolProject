import { connect } from "react-redux"
import {SelectBlockAc} from '../../../redux/NavigationReducer'







const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps, {SelectBlockAc})()