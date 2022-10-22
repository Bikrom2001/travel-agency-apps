import React from 'react';
import './Home.css';
import Sajek from '../../acsscts/images/Sajek.png';
import sreemongol from '../../acsscts/images/Sreemongol.png';
import sundorbon from '../../acsscts/images/sundorbon.png';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className='home-background'>
            <section className="p-6 text-gray-100">
                <div className="container grid gap-6 text-center lg:py-28 py-22  lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
                       
                        <h1 className="text-5xl text-left font-extrabold dark:text-gray-50 uppercase">Cox's bazar</h1>
                        <p className="my-8 text-left">
                            <span className="font-medium dark:text-gray-50 text-left">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</span>
                        </p>

                        <button type="button" className="px-5 py-2 font-semibold rounded dark:bg-yellow-500 dark:text-gray-900 flex items-center gap-2">Booking <FaArrowRight className='mt-1'></FaArrowRight></button>
                    </div>
                    <div className=''>
                        <div className=''>
                            <img src={Sajek} alt="" className="object-cover imgages w-full rounded-md xl:col-span-4 dark:bg-gray-500 " />
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={sreemongol} alt="" className="object-cover imgages w-full rounded-md xl:col-span-4 dark:bg-gray-500" />
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={sundorbon} alt="" className="object-cover imgages w-full rounded-md xl:col-span-4 dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;