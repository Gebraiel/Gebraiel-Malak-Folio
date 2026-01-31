import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Avatar from "./Components/Avatar";
const social = [
  {
    icon:<FaGithub/>,
    link:"https://github.com/Gebraiel"
  },{
     icon:<FaLinkedinIn/>,
    link:"https://www.linkedin.com/in/gebraiel-malak/"
  }
]
export default function Home() {
  return (
      <main className="flex justify-center items-center h-full">
          <div className="container">
            <div className="flex sm:flex-row flex-col-reverse gap-5 items-center justify-between">
              <div className="sm:w-1/2 text-center sm:text-left w-full text-white max-w-lg">
                <small>Frontend Developer</small>
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5 mt-2 leading-tight">
                  Hello I'm<br/>
                  <span className="text-secondary ">Gebraiel Malak</span>
                </h1>
                <p className="leading-loose text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="flex sm:justify-start justify-center gap-6 items-center mt-10">
                  <Link href="" className=" flex  gap-2  items-center px-5 py-3 border border-secondary text-secondary rounded-4xl pointer-cursor hover:bg-secondary hover:text-background duration-300"> Download CV <FaDownload/> </Link>
                  <ul className="flex  gap-3">
                    {
                      social.map((item,index)=><li key={index}><Link href={item.link} target="_blank" className="w-10 aspect-square flex justify-center items-center border border-secondary hover:bg-secondary hover:text-background duration-300 rounded-full text-secondary">{item.icon}</Link></li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <Avatar/>
            </div>
            
          </div>
      </main> 
  );
}
