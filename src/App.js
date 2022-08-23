
// import { useState } from 'react';
import './App.css';
import Cards from './Component/Cards';
import MainContextProv from "./Context/MainContext"
import LayoutContextProv from './Context/LayoutContext';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function App() {

  // const [data,setData] = useState ({
  //   name: 'Dimas',
  //   avatar: 'https://reqres.in/img/faces/8-image.jpg'
  // })

  // const mainContextValue = {data}

  return (
    <div className="App">
      <LayoutContextProv>
      <MainContextProv>
      <Cards/>
      </MainContextProv>
      </LayoutContextProv>
    </div>
  );
}

export default App;
