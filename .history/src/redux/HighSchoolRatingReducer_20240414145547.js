



let HighSchoolsRatingInitState = {
    Universities: [
        {name:"МФТИ", transcript:"(Московский Физико-Технический Институт)", logo:"https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png", backgroundIMGStyle:"BackgroundImgMIPT", RussianRate:'6', GlobalRate:'300', officialLink:'https://mipt.ru/',
    bestSpec:{title:'Компьютерные технологии и вычислительная техника', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
    OtherSpec:[
        {title:'Программная инженерия и компьютерные технологии', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Системное программирование и прикладная математика', id:'09.03.01', Subjects:{first:{kod:"РФИМ", trans:'Русский Язык, Физика, Информатика, Математика'}, second:{kod:"", trans:''}, marks:'385'}},
        {title:'Техническая физика', id:'16.03.01', Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, second:{kod:"", trans:''}, marks:'292'}},
        {title:'Радиотехника и компьютерные технологии', id:'03.03.01', Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, second:{kod:"", trans:''}, marks:'286'}},
        {title:'Прикладная математика и информатика', id:'01.03.02', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"", trans:''}, marks:'299'}}
    ]
    }
    ]
}










const HighSchoolsRatingReducer = (state = HighSchoolsRatingInitState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default HighSchoolsRatingReducer;