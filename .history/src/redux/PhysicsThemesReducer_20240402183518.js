




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
    }
}


const CURRENT_IS_NAV = "CurrentIsNav"