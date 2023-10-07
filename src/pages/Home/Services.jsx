import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";

const Services = () => {
    const eventData = useLoaderData();
    return (
        <div>
            <h1 className=" text-4xl font-bold">Our Services</h1>

            {eventData.map((event) => (
                    <EventCard key={event.id} event={event}></EventCard> 
                ))}
        </div>
    );
};

export default Services;