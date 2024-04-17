import React from "react";
import { NavLink } from "react-router-dom";
import s from './/PhysicsThemes.module.css'
import CurrentSubtopic from "./CurrentSubtopic/CurrentSubtopic";





const PhysicsThemes= (props) => {
    debugger;
      
        return (
            <div>
                { props.isCurrentPageNav === 1 ?
                 props.CurrentTheme === 0 ?
                 <div>
                 <div className={s.CenterSlog}>PHYSICS</div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[0])}} className={s.CMThemeWrap}><NavLink className={s.CMTheme}>{props.Themes[0].name}</NavLink></div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[1])}} className={s.EThemeWrap}><NavLink className={s.ETheme}>{props.Themes[1].name}</NavLink></div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[2])}} className={s.NPThemeWrap}><NavLink className={s.NPTheme}>{props.Themes[2].name}</NavLink></div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[3])}} className={s.MKTThemeWrap}><NavLink className={s.MKTTheme}>{props.Themes[3].name}</NavLink></div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[4])}} className={s.OThemeWrap}><NavLink className={s.OTheme}>{props.Themes[4].name}</NavLink></div>
                 <div onClick={() => {props.SetCurrentTheme(props.Themes[5])}} className={s.TORThemeWrap}><NavLink className={s.TORTheme}>{props.Themes[5].name}</NavLink></div>
                 </div>
                   :
                   
                   <div className={s.CurrentTheme}>
                   <div className={s.CurrentThemeTitle}>{props.CurrentTheme.name}</div>
                   <div className={s.CurrentContent}>
                       <div className={s.CurrentContentContentInfo}>{props.CurrentSubtopics.map(el => {return <CurrentSubtopic Text={el.parText} Title={el.Title}/>})}</div>
                       <div className={s.CurrentContentContent}>{props.CurrentTheme.subtopics.map(el => {
                        return <div className={s.SubTopic}><img className={s.backgroundImg} src={el.backgroundImg}/><div className={s.SubTopicName} onClick={() => {props.SetCurrentSubtopics(el)}}>{el.topicName}</div></div>
                       })}</div>
                   </div>
                     </div>
                :
                
                <div>
                <div className={s.NOCenterSlog}>PHYSICS</div>
                <div onClick={props.ChangeCurrentPageToNav} className={s.NOCMThemeWrap}><NavLink className={s.NOCMTheme}>classical mechanics</NavLink></div>
                <div className={s.NOEThemeWrap}><NavLink className={s.NOETheme}>Electrodynamics</NavLink></div>
                <div className={s.NONPThemeWrap}><NavLink className={s.NONPTheme}>nuclear physics</NavLink></div>
                <div className={s.NOMKTThemeWrap}><NavLink className={s.NOMKTTheme}>molecular kinetic theory</NavLink></div>
                <div className={s.NOOThemeWrap}><NavLink className={s.NOOTheme}>Optics</NavLink></div>
                <div className={s.NOTORThemeWrap}><NavLink className={s.NOTORTheme}>theory of relativity</NavLink></div>
                <a className={s.CheckPage} onClick={props.ChangeCurrentPageToNav} >ПРОДОЛЖИТЬ</a>
                </div>
                }
            </div>
        )
}

export default PhysicsThemes;
