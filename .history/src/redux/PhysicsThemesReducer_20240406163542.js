




let PhysiscsThemes = {
    isCurrentPageNav: 1,
    Themes: [
    {name:'classical mechanics', subtopics: [{topicName: 'Conservation laws', backgroundImg:'https://i.pinimg.com/564x/af/e3/f7/afe3f7fceb8ed368bc6e0826a725f75f.jpg'}, {topicName: 'dynamics', backgroundImg:''}, {topicName: 'fluctuations', backgroundImg:''}]},
    {name:'Electrodynamics', subtopics: [{topicName: 'electromagnetic induction', backgroundImg:''}, {topicName: 'magnetism', backgroundImg:''}, {topicName: 'electrostatics', backgroundImg:''}]},
    {name:'nuclear physics', subtopics: [{topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}]},
    {name: 'molecular kinetic theory', subtopics: [{topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}]},
    {name:'Optics', subtopics: [{topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}]},
    {name:'Astronomy', subtopics: [{topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}, {topicName: '', backgroundImg:''}]}
    ],
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
        case SET_CURRENT_THEME: 
            return {
                ...state,
                CurrentTheme: action.CurrentTheme
            }
        default: return state
    }
}


const CURRENT_IS_NAV = "CurrentIsNav"
const CURRENT_ISNT_NAV = "CurrentIsntNav"
const SET_CURRENT_THEME = 'SetCurrentTheme'

export const ChangeCurrentPageToNav = () =>({type:CURRENT_IS_NAV})
export const ChangeCurrentPageToOther = () =>({type:CURRENT_ISNT_NAV})
export const SetCurrentTheme = (CurrentTheme) => ({type:SET_CURRENT_THEME, CurrentTheme})

export default PhysicsThemesReducer;