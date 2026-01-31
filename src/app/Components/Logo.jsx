import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
        <Link className='text-white md:text-3xl text-xl' href="/">&lt;Gabrix<span className='text-secondary md:text-5xl text-3xl leading-0'>.</span>Dev&gt;</Link>
  )
}
