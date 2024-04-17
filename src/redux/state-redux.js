import {combineReducers, legacy_createStore as createStore } from 'redux'
import PointsTransferReducer from './PointsTransferReducer';
import NavigationReducer from './NavigationReducer';
import PhysicsEGEReducer from './PhysicsEGEReducer';
import PhysicsNavPageReducer from './PhysicsNavPageReducer';
import GreatestPersonsReducer from './GreatestPersonsReducer';
import PhysicsThemesReducer from './PhysicsThemesReducer';
import HighSchoolsRatingReducer from './HighSchoolRatingReducer';





let reducers = combineReducers({
    PTRdom: PointsTransferReducer,
    NavSideDOM: NavigationReducer,
    PhysicsEGEDOM: PhysicsEGEReducer,
    PhysicsNavPageDOM: PhysicsNavPageReducer,
    GreatPersonsDOM: GreatestPersonsReducer,
    PhyThemesDOM: PhysicsThemesReducer,
    HighSchoolRatingsDOM: HighSchoolsRatingReducer
})

let store = createStore( reducers)

window.store = store

export default store;