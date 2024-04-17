import { connect } from "react-redux"
import PhysicsEGE from "./PhysicsEGE"














const mapStateToProps = (state) => {
    return {
        isBurgerMenuOpened: state.PhysicsEGEDOM.isBurgerMenuOpened
    }
}


export default connect(mapStateToProps, {})(PhysicsEGE)