import React from 'react'
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';
import { mainContext } from '../Context/MainContext';

const  CardName = () => {
    const context = useContext(mainContext)
    const {nightmode, day, night} = useContext(LayoutContext)
    const mood = nightmode ? night : day
   return (  
       <div>
           <h1 style={{color:mood.color}}>{context.data.name}</h1>
       </div>
   );
}
 
export default CardName ; 