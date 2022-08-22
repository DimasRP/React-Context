
import { useState } from 'react';
import './App.css';
import Card from './Component/Card';

function App() {

  const [data,setData] = useState ({
    name: 'Dimas',
    avatar: 'https://reqres.in/img/faces/8-image.jpg'
  })

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
