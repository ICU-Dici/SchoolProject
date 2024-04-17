import { connect } from "react-redux"

















const mapStateToProps = (state) => {
    return {
        Universities: state.HighSchoolRatingsDOM.Universities
    }
}


export default connect (mapStateToProps)()