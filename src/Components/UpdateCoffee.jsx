import { useLoaderData } from "react-router-dom";
import bg from '../assets/addCoffeeBG.png'
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const {_id, name, chef, supplier, taste, category, price, photo}= coffee;

    const handleUpdate=e=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const chef= form.chef.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const price= form.price.value;
        const photo= form.photo.value;
        
        const updatedCoffee= {name,chef,supplier,taste,category,price,photo};

        fetch(`https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/coffees/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div className='pt-32 mb-28 bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
                <div className="bg-[#F4F3F0] w-3/4 mx-auto py-16">
                    <h2 className="text-5xl text-[#374151] text-center mb-6">Update Existing Coffee Details</h2>
                    <p className="text-[#1B1A1AB3] px-48 mb-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleUpdate} className='space-y-6'>
                        {/* 1st row */}
                        <div className="flex justify-evenly px-28 gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Name</span>
                                </label>
                                <input  defaultValue={name} type="text" name="name" placeholder="Enter coffee name" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black mb-2">Chef</span>
                                </label>
                                <input  defaultValue={chef} type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="flex justify-evenly px-28 gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Supplier</span>
                                </label>
                                <input  defaultValue={supplier} type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black mb-2">Taste</span>
                                </label>
                                <input  defaultValue={taste} type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="flex justify-evenly px-28 gap-6">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Category</span>
                                </label>
                                <input  defaultValue={category} type="text" name="category" placeholder="Enter coffee category" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black mb-2">Price</span>
                                </label>
                                <input  defaultValue={price} type="text" name="price" placeholder="Enter price" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        {/* 4th row */}
                        <div className="flex justify-evenly px-28 gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Photo</span>
                                </label>
                                <input  defaultValue={photo} type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        <div className='w-full px-28 '>
                            <input className='bg-[#D2B48C] cursor-pointer border-2 border-[#331A15] rounded-md w-full py-3' type="submit" value="Update Coffee Details" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;