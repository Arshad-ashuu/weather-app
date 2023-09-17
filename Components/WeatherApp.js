"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import srchh from '../public/Assets/search.jpg';
import speed from '../public/Assets/speed.png'
import clouds from '../public/Assets/cloud.png';
import temp from '../public/Assets/tempe.png'

function WeatherApp() {
  let api_key="1d21d5ea254311ff062474ba626be4cd";
  const search= async ()=>{
       const element=document.getElementsByClassName("cityinput");
       if (element[0].value==="") {
         return 0;
       }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&unit=metric`
         let responce= await fetch(url);
         let data=await responce.json();

         const humidity=document.getElementsByClassName("humidity-prsnt");
         const wind=document.getElementsByClassName("wind-rate");
         const temp=document.getElementsByClassName("weather-temp");
         const location=document.getElementsByClassName("weather-location");

         humidity[0].innerHTML=data.main.humidity+"%";
         wind[0].innerHTML=data.wind.speed+"Km";
         temp[0].innerHTML=Math.floor(data.main.temp)+"°C";
         location[0].innerHTML=data.name;
       
        } 
  return (
    <>
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityinput" placeholder='Search'/>
            
            <div className="search-icon" onClick={()=>{search()}}>
                <Image src={srchh} alt='search location'/>
            </div>
        </div>
        <div className="cancel"><h3>✖️</h3></div>
        <div className="weather-image">
                <Image src={clouds} height={190} alt='weather image'/> 
         </div>
         <div className="weather-temp">24°C</div>
         <div className="weather-location">London</div>
         <div className="data-container">
         <div className="element">
           <Image src={temp} width={58} height={50} className='icon'/>
           <div className="data">
             <div className="humidity-prsnt">64%</div>
             <div className="text">Humidity</div>
           </div>
          </div> 
          <div className="element">
            <Image src={speed} width={60} height={60}className='icon'/>
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
         </div>
    </div>
    </>
  )
}

export default WeatherApp