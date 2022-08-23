import React from 'react'
import { useContext } from 'react';
import { LayoutContext } from '../Context/LayoutContext';

const Toggle = () => {
    const {nightmode, handleToggle} = useContext(LayoutContext)
    return ( 
        <div>
            <button onClick={handleToggle}>Change {nightmode ? "day":"night"}</button>
        </div>
     );
}
 
export default Toggle;