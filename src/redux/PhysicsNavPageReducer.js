





let PhyNavPageInitState = {
    selectedCase: 0,
    ChildCases: [
        {name: 'negjz'},
        {name: 'negjz'},
        {name: 'negjz'},
        {name: 'negjz'}
    ],
    CaseContent: ['', ''],
    ParentsCases:[
        {Name:'Великие ученые', index:1, childContent:[{name:"Великие ученые", PathTo:'/greatest-physicists'}], MainInfo: ['', ''], img:''},
        {Name:'Поступление в ВУЗы', index:2, childContent:[{name:"Перевод баллов ЕГЭ", PathTo:'/PointsTransfer', BackgroundColor:'white'},{name:"Рейтинг ВУЗов", PathTo:'/High-Schools-rating'}], MainInfo: ['Поступление в ВУЗ', 'Заведомо спланированные действия чаще протекают по плану, ведь он есть'], img:'https://www.m24.ru/b/d/nBkSUhL2hFMgkcm0JL6BrNOp2Z3z8Zj21iDEh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=tb6yLu1kqkK2a9mz0Bg5Nw.jpg'},
        {Name:'Общеобразовательные материалы', index:3, childContent:[{name:"Великие ученые", PathTo:'/greatest-physicists'},{name:"Внеклассные темы", PathTo:'/themes'}], MainInfo: ['',  ''], img:''},
    ],
    CheckAnySelection: true,
    CurrentBackgroudImg: ''
}




const PhysicsNavPageReducer = (state = PhyNavPageInitState, action) => {
    switch(action.type) { 
        case CHOOSE_CASE :{
            if (state.selectedCase === action.selectedCase) {
                return {
                    ...state, 
                selectedCase: 0,
                ChildCases:[],
                CurrentBackgroudImg: ''
                }
            }
            else {
                return {
                    ...state, 
                selectedCase: action.selectedCase,
                ChildCases: action.ChildCases,
                CaseContent: action.CaseContent,
                CheckAnySelection: !state.CheckAnySelection,
                CurrentBackgroudImg: action.CurrentBackgroudImg
                }
            }
        }
        default: return state
    }
}


export default PhysicsNavPageReducer;


const CHOOSE_CASE = 'ChooseCase';

export const ChooseCaseAc = (selectedCase, ChildCases, CaseContent, CurrentBackgroudImg) => ({type: CHOOSE_CASE, selectedCase, ChildCases, CaseContent, CurrentBackgroudImg})
