import Cart from "./Cart";

export default function Arrival() {
  return (
    <div className="bg-white flex items-center flex-col justify-center object-cover ">
      <h1 className=" pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px]">
        New Arrivals
      </h1>
      <div className=" w-full h-fit flex md:flex-row flex-col items-center justify-between md:mx-[100px] gap-4 md:gap-8 md:mt-10">
        {/* cart1 */}
        <Cart
          imageUrl="/T-shirt.png"
          h1="T-SHIRT WITH TAPE DETAILS"
          stars="/stars.png"
          ranking="4.5/5"
          price={120}
          className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] "
        />
        {/* cart2 */}
        <Cart
          imageUrl="/skinnyjeans.png"
          h1="SKINNY FIT JEANS"
          stars="/stars.png"
          ranking="4.5/5"
          price={240}
          className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
        />

        {/* cart3 (hidden on mobile, shown on md and up) */}
        <Cart
          imageUrl="/checkered.png"
          h1="CHECKERED SHIRT"
          stars="/stars.png"
          ranking="4.5/5"
          price={180}
          className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
        />

        {/* cart4 (hidden on mobile, shown on md and up) */}
        <Cart
          imageUrl="/sleeve.png"
          h1="SLEEVE STRIPED T-SHIRT"
          stars="/stars.png"
          ranking="4.5/5"
          price={130}
          className="hidden md:block md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
        />
      </div>
      <div className="md:mt-[150px]">
        <button className=" w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px]   hover:bg-gray-200 flex items-center justify-center">
          View All
        </button>
      </div>
    </div>
  );
}
