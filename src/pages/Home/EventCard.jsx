import { IoPricetagOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
    const { id, short_description, price, title, image } = event;
    return (
        <div className={'card card-compact w-[400px] h-[442px] border shadow-lg'}>
            <figure className="h-[210px]">
                <img src={image} alt="" />
            </figure>

            <div className="card-body text-black ">
                <h2 className={'card-title font-semibold text-xl'}>{title}</h2>
               <div className="flex items-center gap-2">
               <h2  className="text-base"><IoPricetagOutline></IoPricetagOutline></h2>
                <h3 className="text-base "> Price: {price}$</h3>
               </div>

               <div className="flex items-start gap-2">
                <h2 className=" text-base"><TbFileDescription></TbFileDescription></h2>
                <p className=" text-base text-justify">{short_description}</p>
               </div>
                <div className="flex flex-grow">

                </div>
              <Link to={`/eventdetails/${id}`} className=" text-center"> <button className="btn btn-neutral ">View</button></Link>
            </div>
        </div>
    );
};

export default EventCard;