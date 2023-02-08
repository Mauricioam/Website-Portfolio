import React from 'react'
import CvIcon from '../../assets/CvIcon';
import GithubIcon from '../../assets/GithubIcon';
import LinkedInIcon from '../../assets/LinkedIn-icon';


function Footer() {
    const titlesStyle = "font-bold text-3xl"
  return (
    <footer className='w-screen h-[25rem] bg-primary px-20  pt-24'>
            <section className='flex md:flex-row flex-col  pb-24 '>
            <div className='flex flex-col md:gap-7 md:w-2/4 md:flex-1 md:items-start items-center gap-7 pb-8'>
                <h1 className={titlesStyle}>MAURICIO MURDOCH</h1>
                <p className='text-xl'>A pasioned Front-End developer focused on building the Front-End of websites.</p>
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
            <hr className='solid'/>
            <section className='flex flex-col gap-9 items-center pt-10'>
              <p className='text-lg'>Made with love</p>
            </section>

    
    </footer>
  )
} 

export default Footer;