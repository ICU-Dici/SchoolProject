




let HighSchoolsRatingInitState = {
    Universities: [
        {name:"МФТИ", transcript:"(Московский Физико-Технический Институт)", logo:"https://go2phystech.ru/wp-content/uploads/2021/01/mfti.png", RussianRate:'6', GlobalRate:'300'}
    ]
}










const HighSchoolsRatingReducer = (action, state = HighSchoolsRatingInitState) => {
    switch(action.type) {
        default: return state;
    }
}

export default HighSchoolsRatingReducer;