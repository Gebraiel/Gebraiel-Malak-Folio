import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

export default function Header() {
 
  return (
    <header>
        <div className="container">
            <div className="flex justify-between items-center">
                <Logo/>
                <Nav/>
            </div>
        </div>
    </header>
  )
}
