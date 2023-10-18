import { BiSolidShow } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, price, photo}= coffee;

    const handleDelete=id=>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/coffees/${id}`,{
                    method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Coffee deleted successfully',
                            icon:'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                    const remaining= coffees.filter(coffee=>coffee._id!==id);
                    setCoffees(remaining);
                })
            }
          })

        
    }

    return (
        <div className="">
            <div className="flex items-center gap-8 bg-[#F5F4F1] py-7 pl-7 pr-12 rounded-lg h-64">
                <div className="w-44">
                    <img className="max-h-48" src={photo} alt="" />
                </div>
                <div className="w-52">
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span>Chef: </span>{chef}</p>
                    <p><span>Price: </span>{price}</p>
                </div>
                <div className="space-y-2">
                    <div className="cursor-pointer bg-[#D2B48C] p-1 rounded-[5px]">
                        <BiSolidShow className=" text-white"></BiSolidShow>
                    </div>
                    <div className="cursor-pointer bg-[#3C393B] p-1 rounded-[5px]">
                        <Link to={`/updateCoffee/${_id}`}><MdEdit className="text-white"></MdEdit></Link>
                    </div>
                    <div onClick={()=>handleDelete(_id)} className="cursor-pointer bg-[#EA4744] p-1 rounded-[5px]">
                        <AiFillDelete className="text-white"></AiFillDelete>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;