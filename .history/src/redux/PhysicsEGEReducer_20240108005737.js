




let PhysicsEgeInitState = {
    isBurgerMenuOpened: false
}







const PhysicsEGEReducer = ( state = PhysicsEgeInitState, action) => {
    switch (action.type) {
        case TOGGLE_BURGER_MENU:  
        return {
            ...state,
            isBurgerMenuOpened: action.ToggleBurger
        }
        default: return state
    }
}

export default PhysicsEGEReducer;
const TOGGLE_BURGER_MENU = 'toggleBurgerMenu'
export const toggleBurgerMenuAc = (ToggleBurger) => ({type:TOGGLE_BURGER_MENU, ToggleBurger})