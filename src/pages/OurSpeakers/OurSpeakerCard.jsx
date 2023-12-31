//import { AiOutlineNumber } from "react-icons/ai";//
import { MdTitle } from "react-icons/md";
const OurSpeakerCard = ({ ourSpeaker }) => {
    const {  title, photo, name, bio } = ourSpeaker;
    return (
        <div className="  border shadow-lg flex flex-col md:flex-row  bg-white rounded-3xl md:rounded-full md:max-w-[600px] ">
                <div className="md:flex-1 px-4 pt-4 md:px-0 md:pt-0">
                <img className=" md:rounded-full md:h-full rounded-3xl" src={photo} alt="" />
                </div>
                <div className="card-body md:flex-1 my-auto text-center space-y-1 p-2 pb-6">
                <h2 className={'font-bold text-xl  mx-auto '}>{name}</h2>
                <h3 className="text-base font-semibold  mx-auto text-green-600"> {title}</h3>
                    <h3 className="text-xs  md:max-w-[200px] mx-auto text-gray-500">{bio}</h3>
                </div>

            </div>
    );
};

export default OurSpeakerCard;