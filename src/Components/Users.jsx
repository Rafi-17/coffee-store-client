import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers]= useState(loadedUsers);
    
    const handleDelete=(id)=>{
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
                fetch(`https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/users/${id}`,{
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
                    const remaining= users.filter(coffee=>coffee._id!==id);
                    setUsers(remaining);
                })
            }
          })
    }

    return (
        <div>
            <h2>User: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Logged In</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=><tr key={user._id}>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;