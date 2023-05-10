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
                <a href="https://drive.google.com/file/d/1iq-qsmOZ4svLA6dfUPBe7b-pNP5wHHqk/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="bg-[#001b5e] text-gray-100 mt-4 w-full md:w-auto md:px-8 p-4 rounded-lg">
                        Download CV
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AboutMe
