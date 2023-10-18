import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
    const {register, loading, setLoading}= useContext(AuthContext)
    
    
    const handleRegister=e=>{
        e.preventDefault();
        const form= e.target;

        const name=form.name.value;
        const photo= form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        
        register(email,password)
        .then(result=>{
            console.log(result.user)
            setLoading(false);
            Swal.fire({
                title: 'Registered!',
                text: 'User created successfully',
                icon:'success',
                confirmButtonText: 'Cool'
              })
              const createdAt= result.user.metadata.creationTime;
              const user={name, email, createdAt: createdAt};
              fetch('https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/users',{
                method: 'POST',
                headers:{
                  'content-type': 'application/json',
                },
                body: JSON.stringify(user)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                const notify = () => toast("Wow so easy!");
                
              })
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="bg-[#F3F3F3] max-w-[1440px] mx-auto px-40 py-10">
          <div className="hero ">
            <div className="hero-content flex-col shadow-xl w-1/2 px-16 py-20 bg-white">
              <div className="text-center ">
                <h1 className="text-3xl font-bold">Register your account</h1>
                
              </div>
              <div className="card w-full">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input bg-[#F3F3F3] rounded"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your photo url"
                      className="input bg-[#F3F3F3] rounded"
                      name="photo"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Email address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="input bg-[#F3F3F3] rounded"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input bg-[#F3F3F3] rounded"
                      name="password"
                      required
                    />
                  </div>
                  <div>
                    <input className="mr-2" type="checkbox" name="terms" id="terms" />
                    <label className="text-[#706F6F]" htmlFor="terms">Accept <span className="font-semibold">Term & Conditions</span></label>
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn bg-[#403F3F] text-white rounded">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
    );
};

export default Register;