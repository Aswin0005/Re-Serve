const NearbyFood = () => {
    return (
      <div className="relative w-full h-[100vh] double-color">
        <div className="absolute top-0 w-full h-32 bg-gray-opac">
          <div className="flex h-32 gap-8 justify-center">
            <p className="font-poppins font-bold text-black text-[25px] w-[320px] leading-10 my-auto">
              Grab Your Food In Just{' '}
              <span className="text-[55px]">10 Minutes!</span>
            </p>
            <div className="flex my-auto relative ">
              <input
                type="search"
                placeholder="Enter Your Location for nearby foods"
                className="w-[500px] p-5 font-poppins rounded-full h-12"
              ></input>
              <img
                src="/Images/mouse-arrow-poiting-right 1.svg"
                className="w-4 absolute right-6 top-[35%] "
              ></img>
            </div>
            <button className="bg-[#43842F] rounded-md px-2 h-10 font-poppins my-auto text-white">
              Search
            </button>
          </div>
        </div>
        <div className="absolute flex w-full top-1/4 gap-32 justify-center">
          <div className="w-[270px] h-72 rounded-[35px] bg-white shadow-md ">
            <div className="mx-auto mt-4 w-28 flex gap-1 flex-col">
              <img src="/Images/bibimbap 1.svg" className="w-28"></img>
              <p className="font-poppins flex justify-center">Quality Food</p>
            </div>
            <p className="font-poppins flex text-sm ml-3 mt-3 mr-1 text-black opacity-50">
              {' '}
              Every dish boasts top-notch quality without sacrificing
              affordability.
            </p>
          </div>
          <div className="w-[270px] h-72 rounded-[35px] bg-white shadow-md ">
            <div className="mx-auto mt-4 w-28 flex gap-1 flex-col">
              <img src="/Images/cargo 1.svg" className="w-28"></img>
              <p className="font-poppins flex justify-center">Online Order</p>
            </div>
            <p className="font-poppins flex text-sm ml-3 mt-3 mr-1 text-black opacity-50">
              {' '}
              Experience gourmet delights at wallet-friendly prices with our
              online ordering service
            </p>
          </div>
          <div className="w-[270px] h-72 rounded-[35px] bg-white shadow-md ">
            <div className="mx-auto mt-4 w-28 flex gap-2 flex-col">
              <img
                src="/Images/customer-service 1.svg"
                className="w-28"
              ></img>
              <p className="font-poppins flex justify-center">24/7 Service</p>
            </div>
            <p className="font-poppins flex text-sm ml-3 mt-2  mr-1 text-black opacity-50">
              {' '}
              Enjoy top-notch food anytime, anywhere. We're open 24/7 for your
              convenience.
            </p>
          </div>
        </div>
      </div>
    );
}

export default NearbyFood;