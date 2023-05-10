import React from 'react'
import ProjectItem from './ProjectItem'
import portfolioImg from '../assets/portfolio.jpeg'
import burgerImg from '../assets/burger.jpeg'
import metroImg from '../assets/metro.jpeg'
import shoppingImg from '../assets/shopping.jpeg'


const Projects = () => {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                I specialize in web development and have created various web apps using modern technology stacks. Each project is an opportunity for me to learn and experiment with new tech stacks. I am proficient in HTML, CSS, JavaScript, React+Vite, Redux, Tailwind CSS, and Bootstrap. I'm always eager to learn and integrate new technologies to enhance my skill set and keep up with the latest trends.
            </p>
            <div className='grid sm:grid-cols-2 gap-10'>
                <ProjectItem img={portfolioImg} title='Personal Portfolio' tech='React.js, Vite.js and Tailwind CSS' githubLink="" />
                <ProjectItem img={burgerImg} title='Davies Burger' tech='HTML5 and CSS3' githubLink="https://github.com/00jackson/Davie-s-Burger" />
                <ProjectItem img={metroImg} title='Metro Comp' tech='Java' githubLink="https://github.com/00jackson/MetroComp" />
                <ProjectItem img={shoppingImg} title='Amazon Clone' tech='HTML5 and CSS3' githubLink="https://github.com/00jackson/Amazon-Clone" />

            </div>
        </div >
    )
}

export default Projects