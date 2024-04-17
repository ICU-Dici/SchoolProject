





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
        {Name:'О нас', index:1, childContent:[{name:"Рабочий состав"},{name:"Компания"},{name:"Проект"},{name:"Цель работы"}], MainInfo: ['LOGO_NAME', 'Мы работаем ради будущих физиков и математиков'], img:''},
        {Name:'Новости', index:2, childContent:[{name:"Рабочий состав"},{name:"Компания"},{name:"Проект"},{name:"Цель работы"}], MainInfo: ['Новости', 'Современный мир скоротечен, отставать от него - отставать от жизни'], img:''},
        {Name:'ЕГЭ', index:3, childContent:[{name:"Подготовка"},{name:"Гайд на ЕГЭ"},{name:"Рандомный вариант"},{name:"Типовые задания"}], MainInfo: ['Единый Государственный Экзамен', 'Его способен сдать каждый, лишь приложив определенное количество усилий'], img: 'https://www.vkpress.ru/upload/iblock/098/lf357me8woeg78m0qbgpln83sjntgiry.jpg'},
        {Name:'Поступление в ВУЗы', index:4, childContent:[{name:"Калькулятор ВУЗа"},{name:"Перевод баллов ЕГЭ", PathTo:'/Physics/PointsTransfer', BackgroundColor:'white'},{name:"Рейтинг ВУЗов", PathTo:'/Physics/High-Schools-rating'},{name:"Цель работы"}], MainInfo: ['Поступление в ВУЗ', 'Заведомо спланированные действия чаще протекают по плану, ведь он есть'], img:'https://www.m24.ru/b/d/nBkSUhL2hFMgkcm0JL6BrNOp2Z3z8Zj21iDEh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=tb6yLu1kqkK2a9mz0Bg5Nw.jpg'},
        {Name:'Рекомендации по подготовке', index:5, childContent:[{name:"Рабочий состав"},{name:"Компания"},{name:"Проект"},{name:"Цель работы"}], MainInfo: ['', ''], img:''},
        {Name:'Общеобразовательные материалы', index:6, childContent:[{name:"Общее представление о науке"},{name:"Великие ученые", PathTo:'/Physics/greatest-physicists'},{name:"Внеклассные темы", PathTo:'/Physics/themes'},{name:"История науки"}], MainInfo: ['',  ''], img:''},
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