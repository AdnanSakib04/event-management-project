
const PaymentDiscount = () => {
    return (
        <div data-aos="zoom-in" className=" bg-white shadow-lg border mb-40 rounded-3xl">
        <h1 className="mt-10 text-5xl font-bold text-center mb-2"><span className=" text-green-600">Special</span> <span >Offer</span></h1>


        <div className="flex flex-col md:flex-row items-center justify-center justify-items-center gap-12 md:gap-0">
            <div className="flex-1  p-2">
                <div className="flex justify-center">
                <img className="max-w-[250px] md:max-w-sm " src="https://i.ibb.co/Jk2BjD0/image.png" alt="" />
                </div>
                
                <h1 className="text-2xl text-center font-medium mt-8">Get <span className=" text-green-600 ">5%</span> cashback on online payment <br />using our <span className=" text-green-600">EventPay</span> mobile app.</h1>
                <div className=" flex justify-center">
                <button className="btn bg-green-300 font-bold mt-4 mb-6">Download EventPay App For Android</button>
                </div>
            </div>

            <div className="flex-1  p-2 ">
               <div className=" flex justify-center">
               <img className="max-w-[250px] md:max-w-sm " src="https://i.ibb.co/WxNSFYd/image.png" alt="" />
               </div>
              
               <h1 className="text-2xl text-center font-medium mt-8 md:mt-0">Get  <span className=" text-green-600">5%</span> off when you pay with our <br />exclusive <span className=" text-green-600">EventSaver Visa</span> card</h1>
               <div className=" flex justify-center">
                <button className="btn bg-green-300 font-bold mt-4 mb-6">Apply for EventSaver Visa Card</button>
                </div>
            </div>

        </div>
    </div>
    );
};

export default PaymentDiscount;