/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react'
import {motion} from "framer-motion"

import {styles} from "../styles";
import { services  } from '../constants';
import { fadeIn, textVariant } from './../utils/motion';
import {SectionWrapper} from './../hoc';

const ServiceCard = ({index, title, icon}) =>{
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("","",0.1 , 1 )}>
    A passionate Frontend Developer and UI/UX Designer. With a blend of technical proficiency and a love for crafting interactive designs, I bring creativity and functionality to the digital world.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index)=>(
      <ServiceCard key={service.title} index={index} {...service}/>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")