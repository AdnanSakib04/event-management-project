import { TbFileDescription } from "react-icons/tb";
import { AiOutlineNumber } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
const PastEventCard = ({ pastEvent }) => {
    const { id, description, title, photo, date, people, location } = pastEvent;
    return (
        <div className={'card card-compact w-[400px]  border shadow-lg'}>
            <figure className="h-[226px]">
                <img src={photo} alt="" />
            </figure>

            <div className="card-body text-black ">
                <h2 className={'card-title font-semibold text-xl'}>{title}</h2>
                <div className="flex items-center gap-2">
                    <h2 className="text-base"><AiOutlineNumber></AiOutlineNumber></h2>
                    <h3 className="text-base ">{people}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-base"><MdOutlineLocationOn></MdOutlineLocationOn></h2>
                    <h3 className="text-base ">{location}</h3>
                </div>

                <div className="flex items-center gap-2">
                    <h2 className="text-base"><CiCalendarDate></CiCalendarDate></h2>
                    <h3 className="text-base ">{date}</h3>
                </div>

                <div className="flex items-start gap-2">
                    <h2 className=" text-base"><TbFileDescription></TbFileDescription></h2>
                    <p className=" text-base text-justify">{description}</p>
                </div>


            </div>
        </div>
    );
};

export default PastEventCard;