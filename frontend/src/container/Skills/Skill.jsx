
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from react-tooltip;
import { AppWrapper,} from '../wrapper';
import { urlFor, client } from '../../client';
import './Skill.scss'
const Skill = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
  useEffect(() => {
      const query = '*[_type == "experiences"]';
      const skillsquery = '*[_type == "skills"]';
  
      client.fetch(query).then((data) => {
        setExperiences(data);     
      });
      client.fetch(skillsquery).then((data) => {
        
        setSkills(data);
      });
    },
   
  
    []);
  return (
   <>
    <h2 className="head-text">Skills and Experience</h2>
    <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
   </>

  )
}

export default Skill