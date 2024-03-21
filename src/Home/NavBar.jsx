const NavBar = () => {
  return (
    <div className="w-full z-10 h-20 bg-[#004226] fixed top-0">
      <div className="flex justify-between">
        <img src="/Images/logo1.png" className="w-16"></img>
        <div className="flex flex-initial gap-12 h-20 items-center mr-8 text-white font-medium">
          <button className="font-poppins">Home</button>
          <button className="font-poppins">Poducts</button>
          <button className="font-poppins">About us</button>
          <button className="bg-[#43842F] rounded-md p-1">Get in Touch</button>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
