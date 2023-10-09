import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const Services = () => {
    const eventData = useLoaderData();
    return (
        <div>
            <h1 className="mt-28 mb-8 text-center text-5xl font-bold "><span className="text-green-600">Our</span> <span className="">Services</span></h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6 mb-40 justify-items-center p-4 md:p-0">
          {eventData.map((event) => (
                    <EventCard key={event.id} event={event}></EventCard> 
                ))}
          </div>
          
        </div>
    );
};

export default Services;