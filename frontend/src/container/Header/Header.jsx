
import './Header.scss'
import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../wrapper';
const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Nischal</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>

        </div>
      </motion.div>
      <motion.div 
       whileInView={{  opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren:0.5 }}
       className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg"  />
        <motion.img 
       whileInView={{  opacity: [0, 1] }}
       transition={{ duration: 1, ease:'easeInOut'}}
       src={images.circle}
       className='overlay_circle'
      >

      </motion.img>
      </motion.div>
      <motion.div 
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.node,images.redux,images.sass].map((circle,index)=>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header ,'home')
