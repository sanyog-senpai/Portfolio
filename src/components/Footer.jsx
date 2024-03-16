/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import { logo } from "../assets";
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between  bg-primary">

      <div className="logo">
        <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
      </div>
      
      <div className="rights text-xs text-secondary">&copy; Sanyog Rajbhandari @ 2023 </div>
  
    </footer>
  )
}

export default SectionWrapper(Footer, "")