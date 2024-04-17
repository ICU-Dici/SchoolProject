import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"














let mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav
    }
}



export default connect(mapStateToProps)(PhysicsThemes)







