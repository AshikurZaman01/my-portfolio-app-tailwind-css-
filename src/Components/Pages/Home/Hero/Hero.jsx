import React from 'react';
import img1 from "../../../../assets/images/01_image.jpg";

const Hero = () => {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to top, #3498db, #1abc9c)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold',
        display: 'inline-block',
    };

    return (
        <div>
            <section className='md:h-[80vh]  flex justify-center items-center' >
                <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                    <div className='md:order-1 order-2'>
                        <h2 className="font-bold text-4xl">Hello, I'm <span style={gradientStyle}>Ashik</span>,</h2>
                        <div>
                            <h2 className="font-bold text-4xl mt-1 gradiant-text">Frontend Web Developer</h2>
                        </div>
                        <div>
                            <p className="mt-4 text-gray-400 w-[850px]">
                                Former digital-marketing specialist, seeking to apply
                                competent development skills with focus on collaboration,
                                communication, and passion
                            </p>
                            <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                Download resume
                            </button>
                        </div>
                    </div>
                    <div className="md:order-2 order-1 md:my-0 my-10 relative w-full sm:w-[50%]">
                        <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-full sm:after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-full sm:before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                            <img src={img1} className="relative rounded-full z-10 w-full sm:w-[250px] m-auto  sm:h-[250px]" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;
