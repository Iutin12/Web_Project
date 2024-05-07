import React from 'react';
import Pedro from "./img/Pedro.gif"
import './Loading.css';
function Loading() {
    return (
        <div className='bodyPedro'>
        <a className='bodyPedroTxt'> Страница на доработке</a>
        <img src={Pedro} className='Pedro'/>
        </div>
    )
}
export {Loading};