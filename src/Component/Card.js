 import React from 'react'
import CardImage from './CardImage';
import CardName from './CardName';

 const  Card = ({data}) => {
    return (  
        <div>
            <CardName data={data}/>
            <CardImage data={data}/>
        </div>
    );
 }
  
 export default Card ; 