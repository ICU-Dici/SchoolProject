import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"
import { ChangeCurrentPageToNav, ChangeCurrentPageToOther } from "../../redux/PhysicsThemesReducer"













const mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav
    }
}



export default connect(mapStateToProps, {ChangeCurrentPageToNav, ChangeCurrentPageToOther})(PhysicsThemes)







