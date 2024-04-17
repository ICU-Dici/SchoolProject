




let PhysiscsThemes = {
    isCurrentPageNav: 1,
    Themes: [
    {name:'classical mechanics', subtopics: 
    [{topicName: 'Conservation laws', backgroundImg:'https://i.pinimg.com/564x/ff/55/c6/ff55c6d258be86fb0b0ed9718f704ae4.jpg'
    ,subtopicText:[
        {id: 0, Title:'', parText:'Зако́ны сохране́ния — фундаментальные физические законы, согласно которым при определённых условиях некоторые измеримые физические величины, характеризующие замкнутую физическую систему, не изменяются с течением времени. Являются наиболее общими законами в любой физической теории. Имеют большое эвристическое значение.'},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: 'dynamics', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: 'fluctuations', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
    {name:'Electrodynamics', subtopics: 
    [{topicName: 'electromagnetic induction', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: 'magnetism', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: 'electrostatics', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
    {name:'nuclear physics', subtopics: 
    [{topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
    {name:'molecular kinetic theory', subtopics: 
    [{topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
    {name:'Optics', subtopics: 
    [{topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
    {name:'Astronomy', subtopics: 
    [{topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }, {topicName: '', backgroundImg:''
    ,subtopicText:[
        {id: 0, Title:'', parText:''},
        {id: 1, Title:'', parText:''},
        {id: 2, Title:'', parText:''}
    ]
    }]},
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