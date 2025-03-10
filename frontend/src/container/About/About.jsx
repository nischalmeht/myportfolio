import React ,{useState,useEffect} from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrapper } from '../wrapper';


const About = () => {
  const [about, setabout] = useState([]);
  useEffect(() => {
    let isMounted = true
    const query = '*[_type == "abouts"]'
    client.fetch(query).then(data=>{
      if (isMounted) setabout(data);
    })
    return () => {
      isMounted = false;  // Cleanup on unmount
    };
  
  }, [])
  

  return (
    <>
    <h2 className="head-text">
      I Know that <span> Good Development</span> <br /> <span>Good Business</span>
    </h2>
    <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img srcSet={urlFor(about.imgUrl)}  alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
};

export default AppWrapper(About,'about');
