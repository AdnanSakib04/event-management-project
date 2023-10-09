
const Banner = () => {
    return (
        <div className="hero min-h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/DM0XkgD/image.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold ">We Are Your Top Choice for <br /> <span className=" text-green-600">Educational and Training Event</span> <br />Management</h1>
                   
                </div>
            </div>
        </div>
    );
};


export default Banner;