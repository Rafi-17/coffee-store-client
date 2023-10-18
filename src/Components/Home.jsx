import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import bg from '../assets/coffeeListBG.png'
import { LuCoffee } from "react-icons/lu";


const Home = () => {
    const loadedCoffees= useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees);

    return (
        <div className=''>
            <Banner></Banner>
            <div className="mt-28 bg-cover bg-no-repeat mb-16" style={{backgroundImage: `url(${bg})`}}>
                <p className="text-center text-[#1B1A1A] mb-2">--- Sip & Savor ---</p>
                <h2 className="text-4xl font-extrabold text-center text-[#331A15] mb-4">Our Popular Products</h2>
                <div className="text-center mb-14">
                    <Link to='/addCoffee'><button className="bg-[#E3B577] py-2 pl-5 pr-4 rounded-[5px] flex items-center mx-auto"><span className="text-xl text-white">Add Coffee</span><LuCoffee className="text-xl text-[#331A15] ml-1"></LuCoffee></button></Link>
                </div>
                <div className="grid grid-cols-2 justify-center gap-6 px-64">
                    {
                        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></CoffeeCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;