import { IoPricetagOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";
const EventDetails = () => {
    const eventData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = eventData.find(event => event.id === idInt);
    return (
        <div className=" max-w-7xl mx-auto p-3">
            <img className="w-full lg:h-[750px]" src={event.image} alt="" />
         <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 mb-5">{event.title}</h2>

    
            
           <div className="flex items-center justify-center gap-2 mb-6">
           <h2  className="text-3xl"><IoPricetagOutline></IoPricetagOutline></h2>
            <h3 className="text-3xl"> Price: {event.price}$</h3>
           </div>

           <p className=" text-xl text-justify mb-10">{event.long_description}</p>

            </div>
         
        
    

       
    );
};

export default EventDetails;