import { connect } from "react-redux"
import PhysicsEGE from "./PhysicsEGE"
import { toggleBurgerMenuAc, SetBackgroungColor } from "../../redux/PhysicsEGEReducer"














const mapStateToProps = (state) => {
    return {
        isBurgerMenuOpened: state.PhysicsEGEDOM.isBurgerMenuOpened
    }
}


export default connect(mapStateToProps, {toggleBurgerMenuAc, SetBackgroungColor})(PhysicsEGE)