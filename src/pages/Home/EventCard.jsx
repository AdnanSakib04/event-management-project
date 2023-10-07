
const EventCard = ({event}) => {
    const { id, short_description,long_description, price, title, image } = event;
    return (
        <div  className={`card card-compact w-[312px]   `}>
        <figure className="w-[312px] h-[194px]"><img src={image} alt="" /></figure>
        <div className="card-body">
           
            <h2 className={`card-title font-semibold`}>{title}</h2>

            
           
        </div>
    </div>
    );
};

export default EventCard;