import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './Work.scss';
 const Work = () => {
  const [animateCard, setanimateCard] = useState({y:0,opacity:1})
  const [activeFilter, setactiveFilter] = useState('All');
  const [works, setworks] = useState([])
  const [filtWorks, setfiltWorks] = useState([])
  function handleWorkFilter(){

  }
  return (
    <>
    <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
    <div className="app__word-filter">
    {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
    </div>
    <motion.div 
    animate={animateCard}
    transition={{duration:0.5,delayChildren:0.5}}
    className='app__work-porfolio'
    />
    </>
  )
}

export default Work