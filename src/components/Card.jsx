'use client'
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

const Card = ({ id, name, rating, image }) => {



  return (
    <div>
        <Image src={image} width={200} height={200} alt={name} />
        <h3>
            {name}
        </h3>
        <p className='mb-4 text-sm leading-6 text-black'>Rating: {rating}</p>

        <div className='flex justify-center items-center mt-10'>
            <Link
            href={`/recipe/${id}`}
            >
            Ver receta
            </Link>
        </div>
    </div>
  )
}

export default Card
