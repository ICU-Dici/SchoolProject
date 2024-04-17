import React from "react";
import s from './PointsTransfer.module.css'


const PointsTransfer =(props) =>{
    
    let InputOnChange = () =>{
        debugger;
        let text = Number(HrefToInput.current.value);
        props.ChangePointsAc(text);
    }
    let HrefToInput = React.createRef();


    return(
        <div className={s.Wrapper}>
            <div className={s.UiBlock}>
            <div className={s.ChangePointsNumber}>
            <button onClick={props.DownPointsAc}   className={s.minus}><span >&#x3C;</span></button>
            <button onClick={props.UpPointsAc} className={s.plus}><span  >&#x3E;</span></button>
            </div>
            <input type='number' ref={ HrefToInput } onChange={InputOnChange} value={props.BeforePointsNow} className={s.enterPoints}></input>
            <button onClick={props.TransefPointsAc} className={s.CountPoints}>Transfer Point</button>
            <div className={s.results}>{props.AfterPointsNow}/100</div>
            <img className={s.DecorImg1} src="file:///C:/Users/igrka/Desktop/IP/design/DecorateImg1.jpg" alt="ХУЙ"/>
            </div>

        </div>
    )
}

export default PointsTransfer;