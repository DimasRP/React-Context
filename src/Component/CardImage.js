import React from 'react'
import { useContext } from 'react';
import { mainContext } from '../Context/MainContext';

const  CardImage = () => {
    const context = useContext(mainContext)
   return (  
       <div>
            <img src={context.data.avatar}/>
       </div>
   );
}
 
export default CardImage ; 