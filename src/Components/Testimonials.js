import React , { useState } from 'react';
import { Card } from './Card';
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';



export const Testimonials = (props) => {
    let reviews = props.reviews;

    const[index , setindex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setindex(reviews.length-1);
        }
        else{
            setindex(index-1 );
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setindex(randomIndex);
    }

    return (
        <div className='w-[70vw] md:w-[620px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
            <Card review={reviews[index]} />

            <div className='flex mx-auto text-3xl mt-5 gap-3 text-violet-400 font-bold'>

                <button 
                onClick={leftShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>
                <button 
                onClick={rightShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight />
                </button>

            </div>

            <div>
                <button 
                onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 tansition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-md mt-3'>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}
