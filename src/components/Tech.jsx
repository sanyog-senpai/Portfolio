/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <>
    <motion.div className='mb-20' variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>What i know</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
          technologies.map((technology, index)=>(
            <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.30)} className="flex items-center justify-center text-black rounded-full w-28 h-28 bg-white-100 " key={technology.name}>
              
              <img className='object-contain w-20 h-20' src={technology.icon} alt="" />
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")