import bg from '../assets/footerBG.jpg'
import logo from '../assets/logo1.png'
import bottom_bg from '../assets/footerBottomBG.jpg'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div>
            <div className="px-52 pt-28 pb-12" style={{backgroundImage: `url(${bg})`}}>
                <div className='flex gap-36 justify-evenly'>
                    {/* Lefy side */}
                    <div className=' w-full'>
                        <img className='w-20 h-24 mb-4' src={logo} alt="" />
                        <h4 className='text-[#331A15] text-4xl mb-6'>Espresso Emporium</h4>
                        <p className='text-lg mb-6'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-3'>
                            <BsFacebook className='text-2xl text-[#331A15]'></BsFacebook>
                            <BsTwitter className='text-2xl text-[#331A15]'></BsTwitter>
                            <BsInstagram className='text-2xl text-[#331A15]'></BsInstagram>
                            <BsLinkedin className='text-2xl text-[#331A15]'></BsLinkedin>
                        </div>
                        <h4 className='text-[#331A15] text-4xl my-6'>Get in Touch</h4>
                        <div className='flex items-center gap-6 text-xl'>
                            <FaPhone className='text-[#331A15]'></FaPhone>
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className='flex items-center gap-6 text-xl'>
                            <HiMail className='text-[#331A15]'></HiMail>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-6 text-xl'>
                            <HiLocationMarker className='text-[#331A15]'></HiLocationMarker>
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=' w-full pt-28 ml-8'>
                        <h4 className='text-[#331A15] text-4xl mb-6'>Connect with Us</h4>
                        <div className='w-3/4 mb-4'>
                            <input className='w-full px-3 py-2 rounded-md' placeholder='Name' type="text" name="name" id="" />
                        </div>
                        <div className='w-3/4 mb-4'>
                            <input className='w-full px-3 py-2 rounded-md' type="email" placeholder='Email' name="email" id="" />
                        </div>
                        <div className='w-3/4 mb-4'>
                            <textarea className='h-24 w-full px-3 py-2 rounded-md' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                        </div>
                        <input className='py-1 px-3 border-[#331A15] border-2 rounded-3xl' type="submit" value="Send Message" />
                    </div>
                </div>
            </div>
            <div className='' style={{backgroundImage: `url(${bottom_bg})`}}>
                <p className='text-xl text-white text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
        
    );
};

export default Footer;