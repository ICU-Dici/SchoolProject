import { connect } from "react-redux";
import { ShowPersonInfo, ChooseCurrentScientis, CloseScientistsWindow } from "../../../redux/GreatestPersonsReducer";
import GreatestPersons from "./GreatestPersons";














const mapStateToProps = (state) => {
    return{
        GreatPersons: state.GreatPersonsDOM.GreatPersons,
        CurrentChoosenScientist: state.GreatPersonsDOM.CurrentChoosenScientist
    }
}








export default connect(mapStateToProps, {ShowPersonInfo,ChooseCurrentScientis, CloseScientistsWindow})(GreatestPersons)