import React from 'react'
const experiences = [
    {
        position:"Frontend Developer ",
        company : "RASANS",
        duration : "2023 - Present",
        features:[
            "Transforming UI/UX designs into high-performance, pixel-perfect frontend implementations.",
            "Building responsive and user-friendly web applications using React.js and Tailwind CSS.",
            "Collaborated with backend developers to integrate APIs securely and efficiently.",
            "Deploying and maintaining websites for various clients."
        ]
    },{
        position:"Code Instructor ",
        compaany : "Engineeius",
        duration : "2020 - 2023",
        features:[
            "Delivering programming lessons to children, simplifying complex concepts.",
            "Teaching the fundamentals of coding and computational thinking.",

        ]
    }
]
export default function ExperienceTab() {
  return (
    <div>
        <strong className='text-secondary text-3xl' >My Experience</strong>
        <p className='text-white mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolorem, delectus atque repellat nemo nesciunt odio iure voluptate id quidem mollitia excepturi repellendus minus a accusantium magnam in ab?</p> 
        <div className='flex flex-col gap-5 mt-4 '>
            {experiences.map((experience)=>
                <div className='bg-secondaryBg p-5' key={experience.position+experience.company}>
                    <p className='text-white/50 text-sm'>{experience.duration}</p>
                    <b className='text-white text-lg capitalize my-2 block' >{experience.position} at {experience.company}</b>
                    <ul className='list-disc list-inside space-y-2'>
                        {experience.features.map((feature,index)=><li className='text-white/50 capitalize text-sm' key={index}>{feature}</li>)}
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}
