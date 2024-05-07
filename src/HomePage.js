
import './App.css';
import CarouselCompound from './components/carousel-compound'
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import maz from "./img/Мазок.svg";
import fon from "./img/fon.svg";
import fon1 from "./img/fon1.svg";
import fon2 from "./img/Лента.svg";
import icon from "./img/icon.svg";
import Dog from "./img/пес.svg";
import Cat from "./img/кот.png";

import Cat1 from "./img/кот1.svg";
import Cat2 from "./img/кот2.svg";
import Cat3 from "./img/кот3.svg";
import Cat4 from "./img/кот4.svg";
import Cat5 from "./img/Кот5.svg";

import Doctor from "./img/doctor.svg";
import Nojnic from "./img/nojnic.svg";
import Rubashka from "./img/rubashka.svg";

import Odobrenie from "./img/odobrenie.svg";

import Info from "./img/info1.svg";

import Ilgiz from "./img/Ilgiz.svg";
import kuklachev from "./img/kuklachev.jpeg";
import Shafitinsky from "./img/Shafitinsky.jpeg";

import Us from "./img/Us.svg";
import EmailCat from "./img/EmailCat.svg";
import lapki from "./img/lapki.svg";

import SocSety from "./img/socseti.svg";



function NewHomePage() {
  return (
    


    <div className='body'>
     

      <div className='Header'>

        <div className='HeaderMain'>
          <div className='HeaderMainPanel'>
          
            <img src={fon} className='HeaderMainPanelImg'/>
            <img src={fon1} className='HeaderMainPanelImg1'/>
            <img src={fon2} className='HeaderMainPanelImg2'/>
          </div>
          <div className='HeaderMainTxt'>
            <div className='HeaderMainTxtHeader'>
              <img src={icon} className='HeaderMainTxtImg'/>

              <div className='HeaderMainTxtHeaderTxt1'>
              Доступно по всей стране
              </div>
            
            </div>
            <div className='HeaderMainTxtHeaderTxt2'>
              Pet-first <span className='HeaderMainTxtHeaderTxt2Color'> магазин</span> пушистых
            </div>
            <div href='@' className='HeaderMainTxtBatton'>
              <a href='@' className='HeaderMainTxtBattonTxt'>Learn More</a>
            </div>
          </div>
        </div>
        <img src={Dog} className='HeaderPhoto'/>
        <img src={Cat} className='HeaderPhotoMain'/>
      </div>
      <div className='line'>
        <div className='lineTxt'>
          <div className='lineTxt1'>В наличии:</div>
          <div className='lineTxt2'>От темных</div>
          <div className='lineTxt3'>До светлых</div>
        </div>   

        <div className='linePhoto'>
          <img src={Cat1} className='linePhoto1'/>
          <img src={Cat2} className='linePhoto2'/>
          <img src={Cat3} className='linePhoto3'/>
          <img src={Cat4} className='linePhoto4'/>
          <img src={Cat5} className='linePhoto5'/>
        </div>

        <div className='lineTxtRight'>
          <div className='lineTxt1'>А также:</div>
          <div className='lineTxt2'>От сонных</div>
          <div className='lineTxt3'>До резвых</div>
        </div>      
      </div>
      <div className='comment'>
        <div className='commentHeader'>
        Наш сервис
        </div>
        <div className="commentTxt">
          <CarouselCompound infinite>
            <CarouselCompound.Page>
              <div className="commentTxt1">
                <div className='commentTxt1Content'>
                  <img src={Doctor} className='commentTxt1ContentImg'/>

                  <div className='commentTxt1ContentTxt'>
                    <div className='commentTxt1ContentTxt1'>
                    Здоровье
                    </div>
                    <div className='commentTxt1ContentTxt2'>
                    Наши кошечки на столько здоровы, что готовы лететь не то что в космос, а сразу покорять все ваши сердца 
                    </div>
                  </div>

                  <div className='commentTxt1ContentBtn'>
                   <a className='commentTxt1ContentBtnTxt'>Больше</a> 
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
            <div className="commentTxt1">
                <div className='commentTxt1Content'>
                  <img src={Nojnic} className='commentTxt1ContentImg'/>

                  <div className='commentTxt1ContentTxt'>
                    <div className='commentTxt1ContentTxt1'>
                    Внешний вид
                    </div>
                    <div className='commentTxt1ContentTxt2'>
                    Наш магазин ухаживает за всеми питомцами. Ежедневные термальные источники, а так же элитные цирюльники делают из них не просто кошек, а сразу моделей  
                    </div>
                  </div>

                  <div className='commentTxt1ContentBtn'>
                   <a className='commentTxt1ContentBtnTxt'>Больше</a> 
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
            <div className="commentTxt1">
                <div className='commentTxt1Content'>
                  <img src={Rubashka} className='commentTxt1ContentImg'/>

                  <div className='commentTxt1ContentTxt'>
                    <div className='commentTxt1ContentTxt1'>
                    Проживание
                    </div>
                    <div className='commentTxt1ContentTxt2'>
                    Только в нашем элитном магазине всем кошачьим шьет одежду Юдашкин, ежедневно поставляется без лактозное молоко, а подушки сделаны из овеченй шерсти
                    </div>
                  </div>

                  <div className='commentTxt1ContentBtn'>
                   <a className='commentTxt1ContentBtnTxt'>Больше</a> 
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
        <img src={Odobrenie} className='commentImages'/>
      </div>
      <div className='Info'>
        <img src={Info} className='InfoImg'/>
        <div className='InfoTxt'>
          <a className='InfoTxt1'>Кошечка дома - это подарок</a>
          <a className='InfoTxt2'>Иметь пушистого дома - счастье для владельца. Коты и кошки могут создать дома тепло и уют, а так же могу убречь от хвостатых грызунов.  </a>
          <div className='InfoTxt3'>
          <a href='/Loading' className='InfoTxt3Txt'>Смотреть</a>
          </div>
        </div>
      </div>
      <div className='otzyv'>
        <CarouselCompound infinite>
          <CarouselCompound.Page>
            <div className='otzyvMain'>
            <img src={Ilgiz} className='otzyvImg'/>
              <div className='otzyvTxt'>
                <div className='otzyvTxt1'>
                  Отзывы          
                </div>
                <div className='otzyvTxt2'>
                  Не, ну проект делал гений, такое мы одобряем. Сколько динамический элементов, а тема с кошечками ну просто пушка. Магазин зашел, кошечки тоже
                </div>
              </div>
             
            </div>
          </CarouselCompound.Page>
          <CarouselCompound.Page>
          <div className='otzyvMain'>
            <img src={kuklachev} className='otzyvImg1'/>
              <div className='otzyvTxtDva'>
                <div className='otzyvTxt1'>
                  Отзывы          
                </div>
                <div className='otzyvTxt2'>
                  Брал тут кошек для своиз шоу. Ну прекраснейшие киски. Послушные, умные, одини словом загляденье 
                </div>
              </div>
             
            </div>
          </CarouselCompound.Page>
          <CarouselCompound.Page>
          <div className='otzyvMain'>
            <img src={Shafitinsky} className='otzyvImg1'/>
              <div className='otzyvTxtDva'>
                <div className='otzyvTxt1'>
                  Отзывы          
                </div>
                <div className='otzyvTxt2'>
                  Третье сентября день....покупки кота, а ты что подумал ?  
                </div>
              </div>
             
            </div>
          </CarouselCompound.Page>
        </CarouselCompound>
      </div>
      <div className='email'>
        <div className='emailImg'>
        <img src={Us} className='otzyvImg'/>
          <a class="demo" >
              <img className="raz" src={lapki}  />
              <img className="dva" src={EmailCat}  />
          </a>
          
        </div>
        
          
        
        <div class="text-center">
          <div className='EmailTxt'>
          Подпишитесь на нас и получайте новости
          </div>
          <input className='EmailImput' placeholder="Введите email"></input>
          <div className='EmailAnimation'>
            <a href="/Loading" class="button" for="animation3">
              <span >Отправить</span>
              <input className='EmailAnimationInput'></input>
              <div class="EmailArrow"></div>
            </a>
            <img src={fon2} className='EmailTxtImg'/>
          </div>
        </div>
      </div>

      <div className='Itog'>
        <div className='ItogName'>
        Pet-First
        </div>
        <div className='ItogMusor'>
          <div className='ItogMusorVse'>
            <a href="@" className='ItogMusor1'>About</a>
            <a href="@" className='ItogMusor1'>Project </a>
            <a href="@" className='ItogMusor1'>Service </a>
            <a href="@" className='ItogMusor1'>Client </a>
            <a href="@" className='ItogMusor1'>Team </a>
            <a href="@" className='ItogMusor1'>Blog </a>
            <a href="@" className='ItogMusor1'>Contact </a>
            
          </div>
          <img src={SocSety} href="@" className='ItogMusorSety'/>
        </div>
      </div>
      
    </div>
    
    
  );
}

export {NewHomePage};