import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"
import { ChangeCurrentPageToNav, ChangeCurrentPageToOther } from "../../../redux/PhysicsThemesReducer"




class PhysicsThemesAPI extends React.Component {



    componentWillUnmount() {
        this.props.ChangeCurrentPageToOther()
    }




    render () {
        return <>
        <PhysicsThemes isCurrentPageNav={this.props.isCurrentPageNav} ChangeCurrentPageToNav={this.props.ChangeCurrentPageToNav} ChangeCurrentPageToOther={this.props.ChangeCurrentPageToOther}/>
        </>
    }
}








const mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav
    }
}



export default connect(mapStateToProps, {ChangeCurrentPageToNav, ChangeCurrentPageToOther})(PhysicsThemesAPI)







