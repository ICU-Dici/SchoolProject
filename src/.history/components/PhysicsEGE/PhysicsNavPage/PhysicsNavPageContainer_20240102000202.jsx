import { connect } from "react-redux";
import { ChooseCaseAc } from "../../../redux/PhysicsNavPageReducer";
import PhysicsNavPage from "./PhysicsNavPage";














const mapStateToProps = (state) => {
    return {
        selectedCase: state.PhysicsNavPageDOM.selectedCase
    }
}







export default connect(mapStateToProps, {ChooseCaseAc})(PhysicsNavPage)