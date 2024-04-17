





let PhyNavPageInitState = {
    selectedCase: 0
}





const PhysicsNavPageReducer = (state = PhyNavPageInitState, action) => {
    switch(action.type) { 
        case CHOOSE_CASE : return {
            ...state, 
            selectedCase: action.selectedCase
        }
        default: return state
    }
}


export default PhysicsNavPageReducer;


const CHOOSE_CASE = 'ChooseCase';

export const ChooseCaseAc = (selectedCase) => ({type: CHOOSE_CASE, selectedCase})