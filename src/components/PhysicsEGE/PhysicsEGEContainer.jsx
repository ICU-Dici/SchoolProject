import { connect } from "react-redux"
import PhysicsEGE from "./PhysicsEGE"
import { toggleBurgerMenuAc, SetBackgroungColor } from "../../redux/PhysicsEGEReducer"














const mapStateToProps = (state) => {
    return {
        isBurgerMenuOpened: state.PhysicsEGEDOM.isBurgerMenuOpened,
        backgroungColor: state.PhysicsEGEDOM.backgroungColor
    }
}


export default connect(mapStateToProps, {toggleBurgerMenuAc, SetBackgroungColor})(PhysicsEGE)