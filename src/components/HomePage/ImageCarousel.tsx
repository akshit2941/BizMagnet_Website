import React from 'react';
import Image1 from '../../assets/image/carousel-1.jpg';
import Image2 from '../../assets/image/carousel-2.jpg';
import Image3 from '../../assets/image/carousel-3.jpg';

const Carousel: React.FC = () => {
    return (
        <div>
            <div className='mb-12 flex flex-row'>
                <div className='border rounded-xl p-6 static bg-slate-100 w-5/6 flex justify-center items-center m-8'>
                    <img src={Image1} alt="" className="rounded-lg" />
                </div>
                <div className='border rounded-xl p-6 static bg-slate-100 w-5/6 flex justify-center items-center m-8'>
                    <img src={Image2} alt="" className="rounded-lg" />
                </div>
                <div className='border rounded-xl p-6 static bg-slate-100 w-5/6 flex justify-center items-center m-8'>
                    <img src={Image3} alt="" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
