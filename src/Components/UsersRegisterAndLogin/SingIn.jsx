import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const SingIn = () => {
    const { singInUser } = useContext(AuthContext)
    const [Error, setError] = useState(null);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successfully.");
                
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError('Login failed. Please check your Email or Password.');
                toast.error(Error)
            });
    }
    return (
        <div>
            <div className="w-1/2 mx-auto bg-[#ffc300] md:p-4 m-4 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-black">Login Please</h1>
                <form onSubmit={handleLogin} className="card-body">
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-black font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white text-black" required />
                    </div >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white text-black" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]">Login</button>
                    </div>
                    <h1 className="text-center font-bold">New hear Please<Link className="text-blue-500" to={'/singup'}> Register</Link></h1>
                    <hr className="bg-black" />
                    {/* <Toaster></Toaster> */}
                </form >
            </div>
        </div>
    );
};

export default SingIn;