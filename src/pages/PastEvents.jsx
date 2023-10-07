import { useLoaderData } from "react-router-dom";
import PastEventCard from "./PastEventCard";

const PastEvents = () => {
    const pastEventData = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="mt-16 mb-8 text-center text-4xl font-bold">Our Past Events</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6 mb-20 justify-items-center">
          {pastEventData.map((pastEvent) => (
                    <PastEventCard key={pastEvent.id} pastEvent={pastEvent}></PastEventCard>
                ))}
          </div>
          
        </div>
    );
};

export default PastEvents;