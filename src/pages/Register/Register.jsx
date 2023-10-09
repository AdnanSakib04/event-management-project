import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createUser, handleProfileUpdate, signInWithGoogle } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        

        
        if (password.length<6) {
            toast.error('Password must be at least 6 characters or more.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error('Password must contain at least one special character.');
            return;
        }
       


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handleProfileUpdate(name, photo)
                .then(() => {
                    toast.success('Account created successfully');
                    Navigate('/')
                })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('You have successfully logged in');
            })
            .catch(error => {
                console.error(error)
            })
    }

     
    return (
        <div className='max-w-7xl mx-auto mb-40'>

            <div className="  p-4 mt-8 rounded-3xl ">
               
                <form onSubmit={handleRegister} className="md:w-1/2 mx-auto card-body bg-white rounded-3xl">
                <h1 className="text-4xl font-bold lg:text-5xl mt-8 text-center"><span className="text-green-600">Please</span> Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Name</span>
                        </label>
                        <input type="text"  name="name" placeholder="Name" className="input input-bordered  bg-base-200" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Photo URL</span>
                        </label>
                        <input type="text"  name="photo" placeholder="Photo URL" className="input input-bordered  bg-base-200" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered  bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered  bg-base-200" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-300 font-bold text-xl">Register</button>
                    </div>
                    <p onClick={handleGoogleSignIn} className="mt-2 shadow-md btn bg-transparent hover:bg-base-200  font-semibold hover:text-black py-2 px-4 border-2 border-green-600 hover:border-transparent rounded-xl max-w-max mx-auto">
                        <span className="text-3xl"><FcGoogle></FcGoogle></span> Continue with Google
                    </p>
                    <p className="text-center mt-6 text-xl font-medium">Already have an account? <Link className=" text-green-600 font-bold" to={'/login'}>Login</Link></p>
                </form>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;