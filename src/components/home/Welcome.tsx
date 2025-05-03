const WelcomeSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
      {/* Large screens */}
      <div className="hidden lg:flex items-center justify-center gap-4 w-full ">
        <div className="border-t bg-[#3d3d3d] h-1.5 flex-1 mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
          WELCOME
        </h1>
        <div className="border-t bg-[#3d3d3d] h-1.5 flex-1 mt-4"></div>
      </div>

      {/* Small screens */}
      <div className="lg:hidden flex items-center justify-center w-full px-4">
        <div className=" text-[#3d3d3d] w-full max-w-xs py-4 px-6 text-center relative">
          <div className="absolute left-0 right-0 top-2 h-2 bg-[#3d3d3d]"></div>
          <h1 className="text-lg font-bold text-[#3d3d3d] z-10 relative">
            WELCOME
          </h1>
          <div className="absolute left-0 right-0 bottom-2 h-2 bg-[#3d3d3d]"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
