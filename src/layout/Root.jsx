import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";

const Root = () => {
    return (
        <div className=" ">
            <div className=" max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;