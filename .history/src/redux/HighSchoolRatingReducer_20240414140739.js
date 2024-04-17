




let HighSchoolsRatingInitState = {
    Universities: [
        {name:"МФТИ", transcript:"(Московский Физико-Технический Институт)", logo:"https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png", RussianRate:'6', GlobalRate:'300',
    bestSpec:{title:'Компьютерные технологии и вычислительная техника', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
    OtherSpec:[
        {title:'Программная инженерия и компьютерные технологии', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Системное программирование и прикладная математика', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Техническая физика', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Компьютерные технологии и вычислительная техника', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Компьютерные технологии и вычислительная техника', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}}
    ]
    }
    ]
}










const HighSchoolsRatingReducer = (action, state = HighSchoolsRatingInitState) => {
    switch(action.type) {
        default: return state;
    }
}

export default HighSchoolsRatingReducer;