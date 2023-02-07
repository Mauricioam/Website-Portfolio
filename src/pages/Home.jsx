import React from 'react'
import AboutMe from '../components/AboutMe';
import Header from '../components/Header/Header';
import Projects from '../components/Projects';
import Welcome from '../components/Welcome';

function Home() {

  return (
    <div>
        <Header/>
        <Welcome/>
        <AboutMe/>
        <Projects/>
    </div>
  )
};

export default Home;