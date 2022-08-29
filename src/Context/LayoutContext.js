import React, { Component, createContext } from 'react'

export const LayoutContext = createContext()
class LayoutContextProv extends Component {
    
    state = { 
        nightmode : false,
        day: {
            color: '#000',
            background: 'gray'
        },
        night:{
            color: 'white',
            background: 'black'
        }
     }

     handleToogle = () => {
        this.setState({
            nightmode: !this.state.nightmode,
        })
     }
    render() { 
        return ( 
            <LayoutContext.Provider 
            value={{...this.state, handleToggle: this.handleToogle}}>
                {this.props.children}
            </LayoutContext.Provider>
         );
    }
}
 
export default LayoutContextProv;