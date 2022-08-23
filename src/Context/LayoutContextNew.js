import { useState } from "react";


const LayoutContext = (props) => {
    const [nightmode, setNightMode] = useState (false)
    const [data, setData] = useState ({
        nightmode : false,
        day: {
            color: '#000',
            background: 'red'
        },
        night:{
            color: 'white',
            background: 'black'
        }
    })

    // const [day,setDay] = useState({
    //     color: '#000',
    //     background: 'red'
    // })
    // const [night,setNight] = useState({
    //     color: '#000',
    //     background: 'red'
    // })
    // const propsData = {
    //     nightmode,
    //     night,
    //     day
    // }

    const handleToggle = () => {
        setData((prevState) => ({
            ...prevState,
            nightmode: !data.nightmode
        }))
    }

    return ( 
        <LayoutContext.Provider 
            value={{...this.state, handleToggle: this.handleToogle}}>
            {/* value={{...data, handleToogle}}> */}
                {props.children}
            </LayoutContext.Provider>
     );
}
 
export default LayoutContext;