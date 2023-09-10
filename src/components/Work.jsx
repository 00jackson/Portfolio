import React from 'react'
import WorkItem from 'WorkItem'

const data = [
    {
        year: 2023,
        title: 'Software Development Engineer Intern',
        duration: '3 Months',
        details: 'Worked on User Verification/Authentication + Engineering challenges of detecting and removing the fake bots and posts.Integrated Recaptcha with the website - using Google Layer of Protection for websites.'
    }
];
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};
export default Work;
