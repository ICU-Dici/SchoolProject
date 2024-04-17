import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"














mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav
    }
}



connect()(PhysicsThemes)







