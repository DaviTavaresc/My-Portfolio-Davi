import React from 'react';
import Image from "../assets/davi4-removebg.png";
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import{fadeIn, fadein} from '../variants'

const Banner = () => {
  return(

<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
  
<div className='container mx-auto'>
  <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-10'>
  <div className='flex-1 text-center font secondary lg:text-left'>
  <motion.h1 variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}} className='text-[45px] font-bold leading-[0.8] lg:text-[100px]'>DAVI <span>TAVARES</span>
</motion.h1>

  <div>
<div className='mb-6 text-[36px] lg;text-[60px] font-secondary
font-semibold uppercase lead-[1]'>

<motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}}>
  <span className='  Text white mr-4'>I am a</span>
  <TypeAnimation sequence={[
    'Developer',2000,
    'TI',2000,
    'Designer',2000,
  ]}
  
  speed={50}
  className='text-accent'
  wrapper='span'
  repeat={Infinity}/>

</motion.div>


</div>
<motion.p variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}} className='mb-8 mx-w-lg mx-auto lg:mx-0'>I am a dynamic and imaginative junior developer with an insatiable appetite for learning. I constantly push myself to deliver the best possible solutions, embracing challenges as opportunities for growth. With a keen eye for innovation, I enjoy exploring new technologies and approaches to create unique and impactful experiences</motion.p>


<motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

  <button className='btn btn-lg'>Contact me</button>

  <a href='#' className='text-gradient btn-link'>My PortFolio</a>
</motion.div>

<motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max  mx-auto lg:mx-0 '>
<a href='https://github.com/DaviTavaresc'>

  <FaGithub/>
</a>


<a href='https://www.instagram.com/dtavaresc.dev/'>

  <FaInstagram/>
</a>

<a href='https://www.linkedin.com/in/davi-correa-tavares-211902264/'>

  <FaLinkedin/>
</a>



</motion.div>

<motion.div  variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false,amount:0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>

  <img src={Image} alt=''/>
</motion.div>
</div>
</div>
 


</div>
</div>
</section>


    
  ) 
};

export default Banner;
