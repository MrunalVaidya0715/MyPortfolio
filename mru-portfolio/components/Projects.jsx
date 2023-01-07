import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImage from '../public/assets/projects/property.jpg'
import twitchImage from '../public/assets/projects/twitch.jpg'
import cryptoImage from '../public/assets/projects/crypto.jpg'
import netflixImage from '../public/assets/projects/netflix.jpg'


import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full p-4'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImage}
            imageUrl="/property"
          />
          <ProjectItem
            title='Twitch App'
            backgroundImg={twitchImage}
            imageUrl="/twitch"
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImage}
            imageUrl="/crypto"
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImage}
            imageUrl="/netflix"
          />

        </div>

      </div>

    </div>
  )
}

export default Projects