import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import  {motion } from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design ',
    descricao:
    'I provide UI/UX design services for visually appealing and intuitive digital products. With a user-centric approach, I create engaging and user-friendly interfaces. Using research, prototyping, and testing, I ensure the final design aligns with your business goals'
 ,
    link:'Learn more'
  } ,
  {
    name: 'Web Development ',
    descricao:
    'I offer custom web development services, creating responsive websites using HTML, CSS, React.js, and Node.js. I prioritize visual appeal, speed, and SEO optimization. Working closely with you'
    ,
    link:'Learn more'
 
  } ,



  {
    name: 'Mobile Development ',
    descricao:
    'I provide custom mobile app development for Android, focusing on functionality, attractive UI and intuitive UX. From planning to implementation, I use react native languages and Node js and php , I collaborate closely to ensure your app is efficient'
   , link:'Learn more'
  } ,

]


const Services = () => {
  return(  

    <section className='section' id='services'>
      <div className='container mx-auto'>

      <div className='flex flex-col lg:flex-row'>

      {/*text and image*/}
      <motion.div
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once:false, amount:0}}
      class="flex -1 lg: lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg: mb-0 ">
  <div>
    <h2 class="h2 text-accent mb-6">What I do</h2>
    <h3 class="h3 max-w-[455px] mb-16">
      I'm a freelance developer with 2 years of experience in both front-end and back-end development.
    </h3>
    <button class="btn btn-sm">See my work</button>
  </div>
</motion.div>


 {/*services*/}
      <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once:false, amount:0}}
      className='flex-1'>
        {/*services list*/}     

        <div>
          {services.map((service,index)=>{
            const{name,descricao,link} = service
            return(
              <div  className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index} >
              <div className='max-w-[476px]'> 
                <h4 className='text-[20px] tracking-wider font-primary 
                font-semibold mb-6'>
                  {name}
                </h4> 
                <p className='font-secondary leading-tight'>
                  {descricao}</p>
                </div>
              <div className='flex flex-col flex-1 items-end'>  
              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight/>
              </a>

              <a href='#' className='text-gradient text-sm'>
                {link}
              </a>

              </div>
              </div>
            )
          })}
        </div>
      </motion.div>


      </div>

      </div>
      
      </section>


  ) 
  

};

export default Services;
