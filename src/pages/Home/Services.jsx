import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const Services = () => {
    const eventData = useLoaderData();
    return (
        <div>
            <h1 className="mt-16 mb-8 text-center text-4xl font-bold">Our Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6 mb-20 justify-items-center">
          {eventData.map((event) => (
                    <EventCard key={event.id} event={event}></EventCard> 
                ))}
          </div>
          
        </div>
    );
};

export default Services;