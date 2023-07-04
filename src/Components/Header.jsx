const Header = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center py-4 md:pt-8 pb-1 md:px-8 px-4">

      {/* Contact page header */}
      <div className="flex items-center border-[1.5px] rounded-md pl-1 md:pl-2 md:pr-3 pr-2 border-[#12074b] py-1">
        <svg fill="#12074b" viewBox="0 0 16 16" className=" w-4 h-4">
          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="text-[#12074b] font-bold text-sm md:text-base">CONTACT PAGE</span>
      </div>

      {/* Heading and Paragraph */}
      <div className="flex flex-col w-full md:w-[60%] py-6 items-center justify-center">
        <h1 className="text-2xl font-bold text-[#12074b] md:text-6xl">
            Get in touch with us for more information
        </h1>
        <p className="py-4 md:py-6 text-gray-800">
            If you need help or have any questions, we&#39;re here for you.
        </p>
      </div>
      
    </div>
  );
};

export default Header;
