import React from "react"
import Sidenav from './Sidenav'

const AboutMe = () => {
    return (
        <div id="about-me" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
            <p className="py-4 text-lg text-gray-600 text-center">
                Hello! I'm a <strong>frontend developer</strong> based in India, with a <strong>passion for creating beautiful and functional</strong> websites. Moreover, I'm a <strong>passionate leader</strong> who loves to hit the <strong>gym</strong> and maintain a clean diet. With a positive attitude, I'm always ready to <strong>explore</strong> new places and learn new technologies. <strong>Consistent</strong> coding practice is my forte, and I welcome every <strong>new tech stack</strong> with open arms.
            </p>
            <div className="flex justify-center">
                <a href="https://drive.google.com/file/d/15ANhcdz0P_Dz33gFBl7gSYvPNGwgsCuQ/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="bg-[#001b5e] text-gray-100 mt-4 w-full md:w-auto md:px-8 p-4 rounded-lg">
                        Download CV
                    </button>
                </a>
            </div>
            <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
                <h2 className="py-4 text-2xl font-bold text-center text-[#001b5e]">Skills</h2>
                <div className="flex justify-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <img src="assets/html-5.png" alt="HTML5" className="w-8 h-8" />
                            <span className="ml-2">HTML5</span>
                        </div>
                        <div className="flex items-center">
                            <img src="assets/css-3.png" alt="CSS3" className="w-8 h-8" />
                            <span className="ml-2">CSS3</span>
                        </div>
                        <div className="flex items-center">
                            <img src="assests/react.svg" alt="React.js" className="w-8 h-8" />
                            <span className="ml-2">React.js</span>
                        </div>
                        <div className="flex items-center">
                            <img src="/assests/python.jpeg" alt="JavaScript" className="w-8 h-8" />
                            <span className="ml-2">JavaScript</span>
                        </div>
                        {/* Add more skills and icons as needed */}
                    </div>
                </div>
        </div>
    )
}

export default AboutMe
