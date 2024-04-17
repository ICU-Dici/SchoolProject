import { connect } from "react-redux"
import BlockStructure from "./PhyBlockStructure"










const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps)(BlockStructure)