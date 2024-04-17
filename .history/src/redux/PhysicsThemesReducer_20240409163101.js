




let PhysiscsThemes = {
    isCurrentPageNav: 1,
    Themes: [
    {name:'classical mechanics', subtopics: 
    [{topicName: 'Conservation laws', backgroundImg:'https://i.pinimg.com/564x/ff/55/c6/ff55c6d258be86fb0b0ed9718f704ae4.jpg'
    ,subtopicText:''
    }, {topicName: 'dynamics', backgroundImg:''
    ,subtopicText:''
    }, {topicName: 'fluctuations', backgroundImg:''
    ,subtopicText:''
    }]},
    {name:'Electrodynamics', subtopics: 
    [{topicName: 'electromagnetic induction', backgroundImg:''
    ,subtopicText:''
    }, {topicName: 'magnetism', backgroundImg:''
    ,subtopicText:''
    }, {topicName: 'electrostatics', backgroundImg:''
    ,subtopicText:''
    }]},
    {name:'nuclear physics', subtopics: 
    [{topicName: '', backgroundImg:''
    ,subtopicText:''
    }, {topicName: '', backgroundImg:''
    ,subtopicText:''
    }, {topicName: '', backgroundImg:''
    ,subtopicText:''
    }]},
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