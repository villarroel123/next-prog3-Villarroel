'use client'
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

const Card = ({ id, name, rating, image, difficulty }) => {

  return (
    <article className=''>
        <div className='max-w-sm overflow-hidden rounded-xl shadow-lg'>
          <Image 
          src={image}
          width={0}
          height={0} 
          alt={name}
          sizes="50vw"
          className="w-full h-auto object-cover"
          />
          <div className='group p-5 hover:bg-[#9AB87A] hover:text-white'>
              <h3 className='text-[#432b38] group-hover:text-white'>
              {name}
              </h3>
              <p className='text-[#736a6e] group-hover:text-white'>{difficulty}</p>
              <p className='mb-4 text-sm leading-6 text-[#736a6e] group-hover:text-white'>{rating}</p>
              <div className='flex justify-center items-center mt-6 w-full border border-[#9B6A6C] rounded-lg hover:border-transparent hover:bg-[#9B6A6C] p-1  hover:text-white text-[#9B6A6C] group-hover:text-white group-hover:border-white'>
                  <Link
                  href={`/recipe/${id}`}
                  >
                  See more
                  </Link>
              </div>
          </div>
        </div>
    </article>
  )
}

export default Card
