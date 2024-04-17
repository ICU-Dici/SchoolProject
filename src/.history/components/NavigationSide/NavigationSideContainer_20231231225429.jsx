import { connect } from "react-redux"
import {SelectBlockAc} from 'C:\Users\igrka\Desktop\IP\my-app\src\redux\NavigationReducer.js'
import NavigationSide from "./NavigationSide"







const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps, {SelectBlockAc})(NavigationSide)