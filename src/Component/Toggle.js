import React from 'react'
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';


const Toggle = () => {
    const {nightmode, handleToggle} = useContext(LayoutContext)
    return ( 
        <div>
            <Button onClick={handleToggle}>Change {nightmode ? "day":"night"}</Button>
            <InputSwitch checked={handleToggle} >{nightmode ? "day":"night"}</InputSwitch>
 
        </div>
     );
}
 
export default Toggle;