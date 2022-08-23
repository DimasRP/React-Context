import React from 'react'
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';
import { MainContext } from '../Context/MainContext';

const  CardName = () => {
    const data = useContext(MainContext);
    const { cardData } = data;
    const {nightmode, day, night} = useContext(LayoutContext)
    const mood = nightmode ? night : day
   return (  
       <div>
           <h1 style={{color:mood.color}}>{cardData.name}</h1>
       </div>
   );
}
 
export default CardName ; 