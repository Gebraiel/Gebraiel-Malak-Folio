import React from 'react'

export default function EducationTab() {
  return (
    <div>
        <strong className='text-secondary text-3xl'>My Education</strong>
        <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolorem, delectus atque repellat nemo nesciunt odio iure voluptate id quidem mollitia excepturi repellendus minus a accusantium magnam in ab?</p> 
        <div className='flex flex-col gap-5 mt-4 max-h-[350px] overflow-auto'>
            <div className='bg-secondaryBg p-5'>
                <p className='text-white/50 text-sm'>2019-2023</p>
                <b className='text-white text-lg capitalize my-2 block' >Bachelor’s Degree in Computer Science and Artificial Intelligence</b>
                <ul className='list-disc list-inside space-y-2'>
                    <li className='text-white/50 capitalize text-sm' >Cairo University</li>
                </ul>
            </div>
        
        </div>
    </div>
  )
}
