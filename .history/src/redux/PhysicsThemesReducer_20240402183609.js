




let PhysiscsThemes = {
    isCurrentPageNav: false
}








const PhysicsThemesReducer = (state = PhysiscsThemes, action) => {
    switch(action.type) {
        case CURRENT_IS_NAV:
            return {
                ...state,
                isCurrentPageNav: true
            }
        case CURRENT_ISNT_NAV: 
            return {
                ...state,
                isCurrentPageNav:false
            }
    }
}


const CURRENT_IS_NAV = "CurrentIsNav"
const CURRENT_ISNT_NAV = "CurrentIsntNav"