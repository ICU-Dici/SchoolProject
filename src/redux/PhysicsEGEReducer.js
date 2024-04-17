




let PhysicsEgeInitState = {
    isBurgerMenuOpened: false,
    backgroungColor : 'black',

}







const PhysicsEGEReducer = ( state = PhysicsEgeInitState, action) => {
    switch (action.type) {
        case TOGGLE_BURGER_MENU:  
        return {
            ...state,
            isBurgerMenuOpened: action.ToggleBurger
        }
        case SET_BACKGROUNG_COLOR : 
        return {
            ...state, 
            backgroungColor: action.backgroungColor
        }
        default: return state
    }
}

export default PhysicsEGEReducer;



const TOGGLE_BURGER_MENU = 'toggleBurgerMenu'
const SET_BACKGROUNG_COLOR = 'setBackgroundColor'


export const SetBackgroungColor = (backgroungColor) => ({type: SET_BACKGROUNG_COLOR,backgroungColor })
export const toggleBurgerMenuAc = (ToggleBurger) => ({type:TOGGLE_BURGER_MENU, ToggleBurger})