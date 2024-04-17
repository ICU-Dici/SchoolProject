import { connect } from "react-redux"
import HighSchoolsRating from "./HighSchoolsRating"

















const mapStateToProps = (state) => {
    return {
        Universities: state.HighSchoolRatingsDOM.Universities
    }
}


export default connect (mapStateToProps)(HighSchoolsRating)