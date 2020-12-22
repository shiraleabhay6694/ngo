import React from 'react'
import './App.css'
import Slider from './Components/Slider'
import Slider2 from './Components/Slider2'
import { SliderData } from './Components/SliderData'
import { SliderData2 } from './Components/SliderData2'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/Cards'
import Aboutus from './Components/Aboutus'
import Features from './Components/Features'
import Signup from './Components/Signup'

function App() {
  return (
    <div>
      <Slider slides={SliderData}/>
      <Aboutus/>
      <Card/>
      <Slider2 slides={SliderData2}/>
      <Signup/>
    </div>
  );
}

export default App;
