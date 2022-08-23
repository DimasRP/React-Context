 import React from 'react'
import CardImage from './CardImage';
import CardName from './CardName';
import Toggle from './Toggle';
import "./style.css"
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';

 const  Card = () => {
    const {nightmode, day, night} = useContext(LayoutContext)
    const mood = nightmode ? night : day

    return (  
        <div className='bg' style={{backgroundColor: mood.background}}>
            <CardName />
            <CardImage />
            <Toggle/>
        </div>
    );
 }
  
 export default Card ; 