
let NavInitState = {
    selected: 0
}















const NavigationReducer = (state = NavInitState, action) =>{
    let stateCopy
    switch(action.type) {
        case SELECT_BLOCK: debugger;
            return {
                ...state,
                selected: action.selectedBlock
            }
        
        default: return state
    }
}

const SELECT_BLOCK = 'Select_Block'

export const SelectBlockAc = (selectedBlock) => ({type:SELECT_BLOCK, selectedBlock})

export default NavigationReducer;