import Banner from "./Banner";
import Services from "./Services";
import Sponsors from "./Sponsors";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className=" max-w-7xl mx-auto">
                <Services></Services>
            </div>
            <div className=" max-w-7xl mx-auto">
                <Sponsors></Sponsors>
            </div>
        </div>
    );
};

export default Home;