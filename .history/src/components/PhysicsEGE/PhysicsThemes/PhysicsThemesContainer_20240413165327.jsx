import { connect } from "react-redux"
import PhysicsThemes from "./PhysicsThemes"
import { ChangeCurrentPageToNav, ChangeCurrentPageToOther, SetCurrentTheme, SetCurrentSubtopics } from "../../../redux/PhysicsThemesReducer"
import React from "react"




class PhysicsThemesAPI extends React.Component {



    componentDidMount() {
        this.props.ChangeCurrentPageToOther()
        this.props.SetCurrentTheme(0)
    }




    render () {
        return <>
        <PhysicsThemes isCurrentPageNav={this.props.isCurrentPageNav} CurrentTheme={this.props.CurrentTheme} Themes={this.props.Themes} CurrentSubtopics={this.props.CurrentSubtopics} ChangeCurrentPageToNav={this.props.ChangeCurrentPageToNav} ChangeCurrentPageToOther={this.props.ChangeCurrentPageToOther} SetCurrentTheme={this.props.SetCurrentTheme} SetCurrentSubtopics={this.props.SetCurrentSubtopics}/>
        </>
    }
}








const mapStateToProps = (state) => {
    return {
        isCurrentPageNav: state.PhyThemesDOM.isCurrentPageNav,
        CurrentTheme: state.PhyThemesDOM.CurrentTheme,
        Themes: state.PhyThemesDOM.Themes,
        CurrentSubtopics: state.PhyThemesDOM.CurrentSubtopics
    }
}



export default connect(mapStateToProps, {ChangeCurrentPageToNav, ChangeCurrentPageToOther, SetCurrentTheme, SetCurrentSubtopics})(PhysicsThemesAPI)







