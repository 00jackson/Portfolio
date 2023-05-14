import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
const Main = () => {

    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1680813977591-5518e78445a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt='' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jackson</h1>
                    <h2 className='flex sm:text-3xt text-2xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', // Types 'developer'
                                1000, // Waits 1s
                                'Programmer..', // deletes developer and types coder
                                2000, // Waits 2s
                                'Tech Enthusiast...',//.. deletes coder and types tech enthisiast
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />

                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://twitter.com/Jackedonbagpipe'>
                            <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.instagram.com/themagnificentjackson___'>
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.linkedin.com/in/jackson-kujur-067b581a6//'>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://github.com/00jackson'>
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Main
