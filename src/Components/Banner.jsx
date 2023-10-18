import bg from '../assets/3.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-cover min-h-[90vh] bg-no-repeat bg-center flex justify-center items-center' style={{backgroundImage: `url(${bg})`}}>
                <div className='text-white grid grid-cols-2 '>
                    <div></div>
                    <div className='w-[85%]'>
                        <h4 className='text-5xl mb-4'>Would you like a Cup of Delicious Coffee?</h4>
                        <p className='text-lg mb-8 text-gray-400'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='text-2xl bg-[#E3B577] py-2 px-5 text-black'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#ECEAE3] flex justify-evenly px-64 gap-10 py-14'>
                <div>
                    <img src={icon1} alt="" />
                    <h3 className='text-3xl text-[#331A15] mb-2 mt-4'>Awesome Aroma</h3>
                    <p className=' text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <h3 className='text-3xl text-[#331A15] mb-2 mt-4'>High Quality</h3>
                    <p className=' text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <h3 className='text-3xl text-[#331A15] mb-2 mt-4'>Pure Grades</h3>
                    <p className=' text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={icon4} alt="" />
                    <h3 className='text-3xl text-[#331A15] mb-2 mt-4'>Proper Roasting</h3>
                    <p className=' text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;