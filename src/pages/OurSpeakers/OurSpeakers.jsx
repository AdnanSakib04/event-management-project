import { useLoaderData } from "react-router-dom";
import OurSpeakerCard from "./OurSpeakerCard";

const OurSpeakers = () => {
    const ourSpeakersData = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="mt-16 mb-8 text-center text-4xl font-bold">Our Speakers</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-0  gap-y-6 mb-20 justify-items-center">
          {ourSpeakersData.map((ourSpeaker) => (
                    <OurSpeakerCard key={ourSpeaker.id} ourSpeaker={ourSpeaker}></OurSpeakerCard>
                ))}
          </div>
          
        </div>
    );
};

export default OurSpeakers;