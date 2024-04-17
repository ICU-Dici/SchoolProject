




let HighSchoolsRatingInitState = {
    Universities: [
        {name:"МФТИ", id:0, transcript:"(Московский Физико-Технический Институт)", logo:"https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png", backgroundIMGStyle:'BackgroundImgMIPT', RussianRate:'6', GlobalRate:'300', officialLink:'https://mipt.ru/',
    bestSpec:{title:'', id:'', Subjects:{first:{kod:"", trans:''}, second:{kod:"", trans:''}, marks:''}},
    OtherSpec:[
        {title:'Программная инженерия и компьютерные технологии', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
        {title:'Системное программирование и прикладная математика', id:'09.03.01', Subjects:{first:{kod:"РФИМ", trans:'Русский Язык, Физика, Информатика, Математика'}, second:{kod:"", trans:''}, marks:'385'}},
        {title:'Техническая физика', id:'16.03.01', Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, second:{kod:"", trans:''}, marks:'292'}},
        {title:'Радиотехника и компьютерные технологии', id:'03.03.01', Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, second:{kod:"", trans:''}, marks:'286'}},
        {title:'Прикладная математика и информатика', id:'01.03.02', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"", trans:''}, marks:'299'}}
    ]
    },
    {name:"НИЯУ МИФИ", id:1, transcript:"Национа́льный иссле́довательский я́дерный университет Московский инженерно-физический институт", logo:"", backgroundIMGStyle:'BackgroundImgMIPT', RussianRate:'6', GlobalRate:'300', officialLink:'https://mipt.ru/',
    OtherSpec:[
        {title:'Атомные станции: проектирование, эксплуатация и инжиниринг', id:'14.05.02',
        Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'},
        second:{kod:"", trans:''}, marks:'256'}},
        {title:'Информатика и вычислительная техника', id:'09.03.01',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Физика, Информатика, Математика'},
        second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'300'}},
        {title:'Прикладная математика и информатика', id:'01.03.02',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Физика, Информатика, Математика'},
        second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'276'}},
        {title:'Программная инженерия', id:'09.03.04',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Физика, Информатика, Математика'},
        second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'300'}},
        {title:'Ядерные физика и технологии', id:'14.03.02',
        Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'},
        second:{kod:"", trans:''}, marks:'276'}}
    ]
    },
    {name:"", id:2, transcript:"", logo:"https://upload.wikimedia.org/wikipedia/commons/0/0e/ITMO_University.png", backgroundIMGStyle:'BackgroundImgMIPT', RussianRate:'6', GlobalRate:'300', officialLink:'https://mipt.ru/',
    OtherSpec:[
        {title:'Информационные системы и технологии', id:'09.03.02',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'310'}},
        {title:'Программная инженерия', id:'09.03.04',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'304'}},
        {title:'Прикладная математика и информатика', id:'01.03.02',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'294'}},
        {title:'Прикладная информатика', id:'09.03.03',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'308'}},
        {title:'Мехатроника и робототехника', id:'15.03.06',
        Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'259'}}
    ]
    },
    {name:"МГУ", id:3, transcript:"(Московский Государственный Университет)", logo:"https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png", backgroundIMGStyle:'BackgroundImgMIPT', RussianRate:'6', GlobalRate:'300', officialLink:'https://mipt.ru/',
    bestSpec:{title:'Компьютерные технологии и вычислительная техника', id:'09.03.01', Subjects:{first:{kod:"РИМ", trans:'Русский Язык, Информатика, Математика'}, second:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, marks:'293'}},
    OtherSpec:[
        {title:'Фундаментальная и прикладная физика', id:'03.05.02', 
        Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, 
        second:{kod:"РФИ", trans:'Русский Язык, Физика, Информатика'}, marks:'325'}},
        {title:'Фундаментальная информатика и информационные технологии', id:'02.03.02 ', 
        Subjects:{first:{kod:"РФИМ", trans:'Русский Язык, Физика, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'422'}},
        {title:'Прикладная математика и информатика', id:'01.03.02', 
        Subjects:{first:{kod:"РФИМ", trans:'Русский Язык, Физика, Информатика, Математика'},
        second:{kod:"", trans:''}, marks:'409'}},
        {title:'Прикладные математика и физика', id:'03.03.01',
        Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'}, 
        second:{kod:"РФИ", trans:'Русский Язык, Физика, Информатика'}, marks:'309'}},
        {title:'Астрономия', id:'03.05.01',
        Subjects:{first:{kod:"РФМ", trans:'Русский Язык, Физика, Математика'},
        second:{kod:"", trans:''}, marks:'299'}}
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