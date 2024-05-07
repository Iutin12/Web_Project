
import './App.css';
import {App} from "./BD"
import {NewHomePage} from "./HomePage"
import {Loading} from "./Loading"

import {Game_app} from "./Game"
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import maz from "./img/Мазок.svg";

function Navigation() {
  return (
    


    <div className='body'>
     

      <div className='Header'>
        <div className='HeaderHeader'>
          <a className='HeaderHeader1' href='/'>Pet-First</a> 

          
          <div className='HeaderHeader2'>
            <a href="/"  className='HeaHeaderHeader2_1'>
              Home
              
            </a>
            <img src={maz} className='HeaHeaderHeader2_1Img'/>
            <a href='/Game' className='HeaHeaderHeader2_2'>
              Квиз
            </a>

            <a href='/Loading' className='HeaHeaderHeader2_3'>
              Игра №2
            </a>

            <a href='./BD' className='HeaHeaderHeader2_4'>
              Карточки 
            </a>
           
            
          </div>
          <div className='HeaderHeader3'>
            <a href='@' className='HeaHeaderHeader3_1'>
              Sign up
            </a>
           
          </div>
        </div>

        
      </div>
      <Routes>
          <Route path="/BD" element={<App />} />
          <Route path="/" element={<NewHomePage />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Game" element={<Game_app />} />

      {/* Другие маршруты */}
      </Routes>
    </div>
    
    
  );
}

export default Navigation;