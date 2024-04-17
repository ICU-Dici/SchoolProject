import { connect } from "react-redux"
import PhysicsEGE from "./PhysicsEGE"
import { toggleBurgerMenuAc } from "../../redux/PhysicsEGEReducer"














const mapStateToProps = (state) => {
    return {
        isBurgerMenuOpened: state.PhysicsEGEDOM.isBurgerMenuOpened
    }
}


export default connect(mapStateToProps, {toggleBurgerMenuAc})(PhysicsEGE)