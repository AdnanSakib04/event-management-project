import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handleUpdateProfile(name, photo)
                .then(() => {
                    toast.success('User created successfully');
                    Navigate('/')
  
                })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
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
                    <p className="text-center mt-6 text-xl font-medium">Already have an account? <Link className=" text-green-600 font-bold" to={'/login'}>Login</Link></p>
                </form>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;