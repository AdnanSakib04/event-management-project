import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location i n the login page', location)

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // console.log(email, password);
        
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className=" max-w-7xl mx-auto mb-40 ">
            <div className="  p-4 mt-8 rounded-3xl ">
                
                <form onSubmit={handleLogin} className="md:w-1/2 mx-auto card-body bg-white rounded-3xl">
                <h1 className="text-4xl font-bold lg:text-5xl mt-8 text-center"><span className="text-green-600">Please</span> Login</h1>
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
                        <button className="btn bg-green-300 font-bold text-xl">Login</button>
                    </div>
                    <p className=" text-center mt-6 text-xl font-medium">Do not have an account? <Link className=" text-green-600 font-bold" to={'/register'}>Register</Link></p>
                </form>
                
                </div>
        </div>
    );
};

export default Login;