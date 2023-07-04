import { Details } from "../Constants/Details"

const Cards = () => {
  return (
    <div className=" flex w-full px-4 md:px-8 items-center mb-16 gap-5 justify-between flex-col md:flex-row">

        {/* Map the details from constants folder */}
      {Details.map((place,index)=>(
        <div className="md:w-1/3 w-full p-4 shadow-xl flex flex-col rounded-md items-center" key={index}>
            {/* Image container */}
            <div className="items-center rounded-md flex justify-center w-full" style={{backgroundColor:`${place.bg}`}}>
                <img src={place.img} alt="image" className=" object-cover my-4 md:my-8 object-center h-20"/>
            </div>

            {/* Country Container */}
            <div className="w-full py-4 border-b-[1px]">
                <h1 className="text-left text-base text-[#12074b] md:text-xl">
                    {place.country}
                </h1>
            </div>

            {/* Email/ Number container */}
            <div className="flex flex-col gap-2 w-full pt-4">
                <span className=" text-gray-700 text-sm md:text-base">
                    {place.email}
                </span>
                <span className=" text-gray-700 text-sm md:text-base">
                    {place.number}
                </span>
            </div>

            {/* View Location Button */}
            <a href="#" className=" w-full border-[1.5px] text-[#12074b] hover:border-none hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-md py-1 my-5 text-center flex items-center justify-center border-[#12074b]">
                <span>View Location</span>
            </a>
            
        </div>
      ))}
    </div>
  )
}

export default Cards
