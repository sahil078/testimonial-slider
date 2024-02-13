import React from 'react';
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';

export const Card = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-4rem] z-[10] mx-auto2 '>
                <img className='aspect-square rounded-full w-[8vw] h-[16vh] z-[25] relative' src={review.img} alt=''/>

                <div className='w-[8vw] h-[16vh] bg-violet-500 rounded-full z-[10] top-[-5px] left-[5px] absolute'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-sm uppercase text-violet-300'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500 text-sm/[20px]'>
                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/> 
            </div>

        </div>
    )
}
