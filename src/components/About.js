import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {
const [ref,inView] = useInView({
  threshold: 0.5,
});

  return(
<section className='section' id='about' ref={ref}>
  <div className='container mx-auto'> 
  
  <div className='flex flex-col gap-y-10 lg:flex-row lg: items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
    {/*img*/}
<motion.div
  variants={fadeIn('right',0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once:false, amount:0}}

className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

  {/*text*/}
  <motion.div 
  
  variants={fadeIn('left',0.5)}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once:false, amount:0}}
  
  className='flex-1'>
    
    <h2 className='h2 text-accent'>About.me</h2>
    <h3 className='h3 mb-4'>I'm Davi Tavares, a freelance developer with 2 years of experience in both front-end and back-end development</h3>

    <p className='mb-6'>
    I completed my technical course in computer science in 2023, providing me with a strong foundation in the field.

My passion for web development has driven me to enhance my skills in languages such as HTML, CSS, JavaScript, as well as popular frameworks like React and Angular. As a front-end developer, I excel at creating visually appealing and user-friendly interfaces.

Furthermore, I have experience in back-end development, utilizing languages such as Python and Node.js, and working with databases like MySQL and MongoDB. I am a dedicated professional focused on delivering results, with excellent analytical and problem-solving skills to tackle project challenges.
    </p>
    
{/*stats*/}

<div className='flex gap-x-6  lg:gap-x-10 mb-12'>
<div>
  <div className='text-[40px] font-tertiary text-gradient mb-2'>
   {

    inView ?

   <CountUp start={0} end={3} duration={3}/> 
   :null} 
  </div>
  <div className='font-primary text-sm tracking-[2px]'>Years of <br/> 
  Experience </div>
</div>


<div>
  <div className='text-[40px] font-tertiary text-gradient mb-2'>
   {

    inView ?

   <CountUp start={0} end={3} duration={3}/> 
   :null} 
  </div>
  <div className='font-primary text-sm tracking-[2px]'> Developed<br/> 
  Projects
  </div>
</div>



<div>
  <div className='text-[40px] font-tertiary text-gradient mb-2'>
   {

    inView ?

   <CountUp start={0} end={100} duration={3}/> 
   :null} 

   
  </div>
  <div className='font-primary text-sm tracking-[2px]'> Satisfied  <br/> 
  Clients  </div>
</div>











</div>













    
    <div className='flex gap-x-8 items center'>
      <a href='https://www.instagram.com/dtavaresc.dev/'> <button className='btn btn-lg'>Contact  me</button></a>
     

      <a href='#' className='text-gradient btn-link'> My Portfolio</a>
    </div>

    </motion.div>

  </div>
  
  </div>

</section>



  )
  

   
  

  
  
  

};

export default About;
