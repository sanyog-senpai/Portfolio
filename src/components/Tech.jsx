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
            <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.30)} className="w-28 h-28 rounded-full flex justify-center items-center bg-white-100 text-black
            " key={technology.name}>
              
              <img className='w-20 h-20 object-contain' src={technology.icon} alt="" />
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")