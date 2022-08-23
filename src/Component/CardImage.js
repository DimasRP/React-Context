import React from 'react'
import { useContext } from 'react';
import { MainContext } from '../Context/MainContext';                               //icons
 

const  CardImage = () => {
    const data = useContext(MainContext);
    const { cardData } = data;
    
   return (  
       <div>
            <img src={cardData.avatar}/>
           
            
       </div>
   );
}
 
export default CardImage ; 