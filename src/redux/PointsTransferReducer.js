



let PointTransferRInitialState ={
    PointsBase: [
        { id: 0, realId: 0 },
        { id: 1, realId: 4 },
        { id: 2, realId: 8},
        { id: 3, realId: 11 },
        { id: 4, realId: 15 },
        { id: 5, realId: 18 },
        { id: 6, realId: 22 },
        { id: 7, realId: 26 },
        { id: 8, realId: 29 },
        { id: 9, realId: 33 },
        { id: 10, realId: 36 },
        { id: 11, realId: 38 },
        { id: 12, realId: 39 },
        { id: 13, realId: 40 },
        { id: 14, realId: 42 },
        { id: 15, realId: 43 },
        { id: 16, realId: 44 },
        { id: 17, realId: 46 },
        { id: 18, realId: 47 },
        { id: 19, realId: 48 },
        { id: 20, realId: 49 },
        { id: 21, realId: 51 },
        { id: 22, realId: 52 },
        { id: 23, realId: 53 },
        { id: 24, realId: 55 },
        { id: 25, realId: 56 },
        { id: 26, realId: 57 },
        { id: 27, realId: 59 },
        { id: 28, realId: 60 },
        { id: 29, realId: 61 },
        { id: 30, realId: 62 },
        { id: 31, realId: 65 },
        { id: 32, realId: 68 },
        { id: 33, realId: 70 },
        { id: 34, realId: 73 },
        { id: 35, realId: 75 },
        { id: 36, realId: 78 },
        { id: 37, realId: 80 },
        { id: 38, realId: 83 },
        { id: 39, realId: 85 },
        { id: 40, realId: 88 },
        { id: 41, realId: 90 },
        { id: 42, realId: 93 },
        { id: 43, realId: 95 },
        { id: 44, realId: 98 },
        { id: 45, realId: 100 },
    ],
    BeforePointsNow: 0,
    AfterPointsNow: 0

}

const PointsTransferReducer = (state = PointTransferRInitialState, action) => {
    let stateCopy
    switch(action.type) {

        case TRANSEF_POINTS:
        
          const afterPointsNow = state.PointsBase.find((points) => points.id === state.BeforePointsNow)?.realId || 0;
        
          return {
            ...state,
            AfterPointsNow: afterPointsNow
          };
        case POINTS_ON_CHANGE : {
            stateCopy ={
                ...state,
                BeforePointsNow: action.NewBeforePointsNow
            }
            return stateCopy;
        }
        case UP_POINTS: debugger;
            if (state.BeforePointsNow!= 45) {
                return {
                    ...state,
                    BeforePointsNow: state.BeforePointsNow+1
                }
            }
            else {
                return {
                    ...state, 
                    BeforePointsNow: state.BeforePointsNow=0
                }
            }

        case DOWN_POINTS: if (state.BeforePointsNow!= 0) {
            return {
                ...state,
                BeforePointsNow: state.BeforePointsNow-1
            }
        }
        else {
            return {
                ...state, 
                BeforePointsNow: state.BeforePointsNow=45
            }
        }
        default: return state
    }
}

export default PointsTransferReducer;

const TRANSEF_POINTS = 'TransefPoints'
const POINTS_ON_CHANGE = 'ChangePoints'
const UP_POINTS = 'UpPoints'
const DOWN_POINTS = 'DownPoints'


export const UpPointsAc = () => ({type:UP_POINTS})
export const DownPointsAc = () => ({type:DOWN_POINTS})
export const ChangePointsAc = (NewBeforePointsNow) => ({ type: POINTS_ON_CHANGE, NewBeforePointsNow })
export const TransefPointsAc = () =>({ type: TRANSEF_POINTS})