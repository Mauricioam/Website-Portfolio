import React from 'react'
import CvIcon from '../../assets/CvIcon';
import GithubIcon from '../../assets/GithubIcon';
import LinkedInIcon from '../../assets/LinkedIn-icon';
import heartIcon from "../../assets/heart-icon.svg";


function Footer() {
    const titlesStyle = "font-bold lg:text-3xl text-xl"
  return (
    <footer className='w-screen h-[25rem] bg-primary lg:px-20  pt-24'>
            <section className='flex md:flex-row flex-col  md:pb-24 '>
            <div className='flex flex-col md:gap-7 md:w-2/4 md:flex-1 md:items-start items-center gap-7 pb-8'>
                <h1 className={titlesStyle}>MAURICIO MURDOCH</h1>
                <p className='lg:text-xl md:px-0 text-lg px-4'>A pasioned Front-End developer focused on building the Front-End of websites.</p>
            </div>
            <div className='flex flex-col items-center gap-7'>
                <h1 className={titlesStyle}>SOCIAL</h1>
                <div className='flex gap-5'>
                  <LinkedInIcon wpx={"45px"} hpx={"45px"}/>
                  <GithubIcon  wpx={"45px"} hpx={"45px"}/>
                  <CvIcon  wpx={"45px"} hpx={"45px"}/>
                </div>
            </div>
            </section>
            <hr className='solid md:flex hidden'/>
            <section className='flex gap-2 items-center justify-center md:pt-10 pt-3'>
              <p className='text-lg'>Made with</p>
              <img className='w-8' src={heartIcon} alt="heart-icon" />
              <p className='text-lg'>by <a className='hover:text-slate-100 transition-all'  href="https://www.linkedin.com/in/mauriciomurdoch/">Mauricio Murdoch</a></p>
            </section>

    
    </footer>
  )
} 

export default Footer;