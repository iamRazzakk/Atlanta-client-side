import Lottie from 'lottie-react';
import lottieAnimation from '../../assets/Animation.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import { auth } from './Console.firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import useAxiosPublic from '../Hook/axiosPublic';
import UUID from 'uuid-int';


const SingUp = () => {
    const { createUser, singInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [haveUser, setHaveUser] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                const id = 0;
                const generator = UUID(id);
                const userId = generator.uuid();

                const userData = {
                    userId: userId,
                    displayName: name,
                    email: user.email,
                };

                toast.success("Account created Successfully");
                navigate('/');

                axiosPublic.post('/user', userData)
                    .then(() => {
                        console.log(user);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
                setHaveUser(false);
            });
    };

    const handleLoginWithGoogle = () => {
        singInWithGoogle(auth, GoogleAuthProvider)
            .then((result) => {
                const user = result.user;

                const userData = {
                    userId: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                };

                toast.success("Signed in with Google Successfully");
                navigate('/');

                axiosPublic.post('/user', userData)
                    .then(() => {
                        console.log(user);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
    };
    return (
        <div className="md:flex md:p-6">
            <div className="flex-1 flex-col-reverse md:p-4 md:mt-14">
                <Lottie className='md:h-[450px] ' animationData={lottieAnimation} loop={true} />
            </div>
            <div className="w-1/2 mx-auto bg-[#ffc300] md:p-4 m-4 rounded-lg shadow-lg">
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
                        <button className=" bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]">Sing up</button>
                    </div>
                    <h1 className="text-center font-bold">All ready have an account Please<Link className="text-blue-500" to={'/login'}> Login</Link></h1>
                    <hr className="bg-black" />
                    {/* <Toaster></Toaster> */}
                    <button onClick={handleLoginWithGoogle} className='bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]'>Google</button>
                </form >
            </div>
        </div>
    );
};

export default SingUp;