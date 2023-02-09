import React from 'react'
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer/Footer';
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
         <Footer/>  
    </div>
  )
};

export default Home;