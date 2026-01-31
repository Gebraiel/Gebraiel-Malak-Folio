import React, { useContext } from 'react'
import { TabsContext } from '../Context/TabsContext'
export default function ResumeSideBar() {
  const tabs=[
    "Experience",
    "Education",
    "Skills"
  ]
  const {setActiveTab} = useContext(TabsContext)
  return (
    <div className='md:max-w-md w-full'>
        <h1 className='text-white text-3xl font-bold mb-3' >Why Hire Me? </h1>
        <p className='text-white/50 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        <div className='space-y-5 my-10'>
            {tabs.map((tab,index)=><button key={index} onClick={()=>setActiveTab(index)} className='w-full py-5 bg-secondaryBg rounded-2xl text-white text-sm cursor-pointer hover:bg-secondary hover:text-background duration-300'>{tab}</button>)}
        </div>
    </div>
  )
}
