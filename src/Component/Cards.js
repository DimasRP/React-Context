 import React from 'react'
import CardImage from './CardImage';
import CardName from './CardName';
import Toggle from './Toggle';
import "./style.css"
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';
import { Card } from 'primereact/card';

 const  Cards = () => {
    const {nightmode, day, night} = useContext(LayoutContext)
    const mood = nightmode ? night : day

    return (  
                
            <Card className='card' style={{backgroundColor: mood.background}}>
            <CardName />
            <CardImage />
            <Toggle/>
            </Card>
    );
 }
  
 export default Cards ; 