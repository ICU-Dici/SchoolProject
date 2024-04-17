




let PhysiscsThemes = {
    isCurrentPageNav: 1,
    Themes: [{}, {}, {}, {}, {}, {}]
    CurrentTheme: 0
}








const PhysicsThemesReducer = (state = PhysiscsThemes, action) => {
    switch(action.type) {
        case CURRENT_IS_NAV:
            debugger
            return {
                ...state,
                isCurrentPageNav: 1
            }
        case CURRENT_ISNT_NAV: 
        debugger
            return {
                ...state,
                isCurrentPageNav:0
            }
        default: return state
    }
}


const CURRENT_IS_NAV = "CurrentIsNav"
const CURRENT_ISNT_NAV = "CurrentIsntNav"

export const ChangeCurrentPageToNav = () =>({type:CURRENT_IS_NAV})
export const ChangeCurrentPageToOther = () =>({type:CURRENT_ISNT_NAV})

export default PhysicsThemesReducer;