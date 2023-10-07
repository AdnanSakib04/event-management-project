import NavBar from "../shared/NavBar/NavBar";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <div className=" max-w-7xl mx-auto">
            <NavBar></NavBar>
            </div>
            
            <Banner></Banner>
            <div className=" max-w-7xl mx-auto">
            <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;