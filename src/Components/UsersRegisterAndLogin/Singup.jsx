import Lottie from 'lottie-react';
import lottieAnimation from '../../assets/Animation.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const SingUp = () => {
    const { createUser, singInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [haveUser, setHaveUser] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser( email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Account created Successfully")
                setHaveUser(true)
                e.target.reset()
                navigate('/login')

            })
            .catch(error => {
                console.log(error);
                setHaveUser(false)
            })
    }
    return (
        <div className="md:flex md:p-6">
            <div className="flex-1 flex-col-reverse md:p-4 md:mt-14">
                <Lottie className='md:h-[450px] ' animationData={lottieAnimation} loop={true} />
            </div>
            <div className="w-1/2 mx-auto bg-[#effc10] md:p-4 m-4 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-black">Register Please</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white text-black" required />
                    </div >
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
                        <button className="bg-[#3d90e9] text-black py-3 text-xl rounded-full button">Login</button>
                    </div>
                    <h1 className="text-center font-bold">All ready have an account Please<Link className="text-blue-500" to={'/login'}> Login</Link></h1>
                    <hr className="bg-black" />
                    {/* <Toaster></Toaster> */}
                    <button className=''>Google</button>
                </form >
            </div>
        </div>
    );
};

export default SingUp;