import React from 'react'
import Particles from "react-particles-js";
import patjson from './pat.json'


const Particle = () => {
  return (
    <Particles params={patjson} className="App-particles__container" />
  )
}

export default Particle