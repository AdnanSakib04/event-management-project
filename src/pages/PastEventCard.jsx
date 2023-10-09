import { TbFileDescription } from "react-icons/tb";
import { AiOutlineNumber } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
const PastEventCard = ({ pastEvent }) => {
    const { id, description, title, photo, date, people, location } = pastEvent;
    return (
        <div className={'card card-compact w-[400px]  border shadow-lg bg-white'}>
            <figure className="h-[226px]">
                <img src={photo} alt="" />
            </figure>

            <div className="card-body text-black ">
                <h2 className={'card-title font-bold text-xl text-green-600'}>{title}</h2>
                <div className="flex items-center gap-2">
                    <h2 className="text-base text-green-600"><AiOutlineNumber></AiOutlineNumber></h2>
                    <h3 className="text-base font-medium">{people}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-base text-green-600"><MdOutlineLocationOn></MdOutlineLocationOn></h2>
                    <h3 className="text-base font-medium">{location}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-base text-green-600"><CiCalendarDate></CiCalendarDate></h2>
                    <h3 className="text-base font-medium">{date}</h3>
                </div>

                <div className="flex items-start gap-2">
                    <h2 className=" text-base text-green-600"><TbFileDescription></TbFileDescription></h2>
                    <p className=" text-base text-justify text-gray-500">{description}</p>
                </div>


            </div>
        </div>
    );
};

export default PastEventCard;