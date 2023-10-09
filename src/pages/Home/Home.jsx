import Banner from "./Banner";
import PaymentDiscount from "./PaymentDiscount";
import Services from "./Services";
import Sponsors from "./Sponsors";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className=" max-w-7xl mx-auto">
                <Services></Services>
            </div>
            <div className=" max-w-7xl mx-auto p-4 md:p-0">
                <Sponsors></Sponsors>
            </div>
            <div className=" max-w-7xl mx-auto p-4 md:p-0">
                <PaymentDiscount></PaymentDiscount>
            </div>
        </div>
    );
};

export default Home;