import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"
import { ChangeCurrentPageToNav, ChangeCurrentPageToOther } from "../../../redux/PhysicsThemesReducer"




class PhysicsThemesAPI extends React.Component {



    componentWillUnmount() {
        this.props.ChangeCurrentPageToOther()
    }




    render () {
        return <>
        <PhysicsThemes/>
        </>
    }
}








const mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav
    }
}



export default connect(mapStateToProps, {ChangeCurrentPageToNav, ChangeCurrentPageToOther})(PhysicsThemesAPI)







