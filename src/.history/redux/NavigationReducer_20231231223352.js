
let NavInitState = {
    selected: 0
}















const NavigationReducer = (state = NavInitState, action) =>{
    let stateCopy
    switch(action.type) {
        case SELECT_BLOCK: {

        }
        default: return state
    }
}

const SELECT_BLOCK = 'Select_Block'

export default NavigationReducer;