import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
 const SocialMedia = () => {
  return (
    <div className='app_social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div>

    </div>
  )
}

export default SocialMedia