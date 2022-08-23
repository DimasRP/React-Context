
import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import {mainContext} from "./Context/MainContext"
import LayoutContextProv from './Context/LayoutContext';

function App() {

  const [data,setData] = useState ({
    name: 'Dimas',
    avatar: 'https://reqres.in/img/faces/8-image.jpg'
  })

  const mainContextValue = {data}

  return (
    <div className="App">
      <LayoutContextProv>
      <mainContext.Provider value={mainContextValue}>
      <Card/>
      </mainContext.Provider>
      </LayoutContextProv>
    </div>
  );
}

export default App;
