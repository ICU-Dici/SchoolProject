



let GreatPersonInitState = {
    GreatPersons: [
        {name:'Albert Einstein', photo:'', MainInfo:'', id: 1}
    ],
    IsChoosenToShow: 1
}






const GreatPersonReducer = (state= GreatPersonInitState, action) => {
    switch(action.type) {
        case SHOW_PERSON_INFO: 
            return {
                ...state,
                IsChoosenToShow: action.IsChoosenToShow
            }
        
        default: return state;
    }
}

export default GreatPersonReducer;


const SHOW_PERSON_INFO = 'ShowPersonInfo'
export const ShowPersonInfo = (IsChoosenToShow) => ({type: SHOW_PERSON_INFO,IsChoosenToShow})