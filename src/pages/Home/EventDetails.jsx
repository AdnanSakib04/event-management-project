import { IoPricetagOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
const EventDetails = () => {
    const eventData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = eventData.find(event => event.id === idInt);
    return (
        <div className="max-w-7xl p-4 mx-auto mb-40 mt-8">
            <div className="   bg-white rounded-lg  p-3">
            <img className="w-full lg:h-[750px]" src={event.image} alt="" />
         <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 mb-5 ">{event.title}</h2>
            
           <div className="flex items-center justify-center gap-2 mb-6 border-4 border-green-500 rounded-xl max-w-max mx-auto p-2 md:p-3 ">
           <h2  className="text-base md:text-2xl font-bold "><IoPricetagOutline></IoPricetagOutline></h2>
            <h3 className="text-base md:text-2xl font-bold "> Price: {event.price}<span className="">$</span></h3>
           </div>

           <p className=" text-xl text-justify mb-10 font-semibold">{event.long_description}</p>

            </div>
        </div>
         
        
    

       
    );
};

export default EventDetails;