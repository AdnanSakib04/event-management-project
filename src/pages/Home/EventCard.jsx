import { IoPricetagOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
    const { id, short_description, price, title, image } = event;
    return (
        <div className={'card card-compact w-[400px] h-[442px]  shadow-lg border bg-white'}>
            <figure className="h-[210px]">
                <img src={image} alt="" />
            </figure>

            <div className="card-body text-black ">
                <h2 className={'card-title font-bold text-xl text-green-600'}>{title}</h2>
               <div className="flex items-center gap-2 ">
               <h2  className="text-base text-green-600 font-semibold"><IoPricetagOutline></IoPricetagOutline></h2>
                <h3 className="text-base font-semibold"> Price: {price}$</h3>
               </div>

               <div className="flex items-start gap-2">
                <h2 className=" text-base text-green-600"><TbFileDescription></TbFileDescription></h2>
                <p className=" text-base text-justify text-gray-500">{short_description}</p>
               </div>
                <div className="flex flex-grow">

                </div>
              <Link to={`/eventdetails/${id}`} className=" text-center"> <button className="btn  bg-green-300 font-bold ">View</button></Link>
            </div>
        </div>
    );
};

export default EventCard;