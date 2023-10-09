import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           
        <h1 className="text-center mt-80 text-4xl font-black">Page not found!</h1>

       <div className="text-center mt-9">
       <Link to={'/'}><div className="btn bg-green-600 text-white font-semibold rounded-lg border-none">go back to home  </div></Link>
       </div>

    </div>
    );
};

export default ErrorPage;