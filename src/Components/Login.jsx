import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {

    const {login}= useContext(AuthContext)

    const handleLogin=e=>{
        e.preventDefault();
        const form= e.target;

        const email=form.email.value;
        const password=form.password.value;

        login(email, password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully',
                icon:'success',
                confirmButtonText: 'Cool'
              })
            const user={
              email,
              lastLoggedAt: result.user?.metadata?.lastSignInTime
            }
            fetch('https://coffee-store-server-avplmuwaq-rafis-projects-8070ee7b.vercel.app/users',{
              method: 'PATCH',
              headers:{
                'content-type': 'application/json',
              },
              body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              
            })

        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="bg-[#F3F3F3] max-w-[1440px] mx-auto px-40 py-10">
      <div className="hero ">
        <div className="hero-content flex-col shadow-xl w-1/2 px-24 py-20 bg-white">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Login your account</h1>
            
          </div>
          <div className="card w-full">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email address</span>
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
                  <span className="label-text text-xl font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input bg-[#F3F3F3] rounded"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-[#403F3F] text-white rounded">Login</button>
              </div>
              <p className="font-semibold text-center text-[#706F6F] mt-4">Dont’t Have An Account ? <Link to='/register' className="text-[#F75B5F]">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;