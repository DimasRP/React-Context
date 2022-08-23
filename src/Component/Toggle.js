import React from 'react'
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';
import { Button } from 'primereact/button';

const Toggle = () => {
    const {nightmode, handleToggle} = useContext(LayoutContext)
    return ( 
        <div>
            <Button onClick={handleToggle}>Change {nightmode ? "day":"night"}</Button>
            
        </div>
     );
}
 
export default Toggle;