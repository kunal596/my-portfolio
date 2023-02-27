import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import Scrolldown from "./Scrolldown";


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__contianer contianer grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <Scrolldown /> 
      </div>
    </section>
  )
}

export default Home