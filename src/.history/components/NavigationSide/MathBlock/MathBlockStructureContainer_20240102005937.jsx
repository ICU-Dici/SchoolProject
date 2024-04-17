import { connect } from "react-redux"
import BlockStructure from "./PhyBlockStructure"
import MathBlockStructure from "./MathBlockStructure"










const mapStateToProps = (state) => {
    return {
        selected: state.NavSideDOM.selected
    }
}

export default connect(mapStateToProps)(MathBlockStructure)