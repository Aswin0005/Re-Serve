
const ViewPage = () => {
    const img = ""
 return (
   <div
     className="imag relative"
     //  style={{
     //    width: '100%',
     //    height: '100%',
     //    backgroundImage: `url(https://www.google.com/imgres?q=background%20image&imgurl=https%3A%2F%2Fi.pinimg.com%2F564x%2Fa9%2F6b%2F6c%2Fa96b6cfa26ac9b4d22ed475ff1189511.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fhd-background-cb-background-hd--961659326666737179%2F&docid=GTNa5BOLLj1_YM&tbnid=uRMoV8e5otb1KM&vet=12ahUKEwiz_uKGnIOFAxUDbmwGHTMXAv8QM3oECBkQAA..i&w=480&h=722&hcb=2&ved=2ahUKEwiz_uKGnIOFAxUDbmwGHTMXAv8QM3oECBkQAA)`,
     //  }}
   >
     {/* <img className="w-full fixed z-0" src="src/Home/Background.jpg"></img> */}
     <img
       src="/Images/Rotti.png"
       className="absolute w-[490px] top-1/4"
     ></img>
     <div className="absolute font-poppins font-semibold text-[90px] left-[35%] top-1/4 w-[780px] leading-[100px]">
       <p>
         Giving <span className="text-[150px] text-[#F49719]">Food</span> a
         Second Chance
       </p>
       <p className="text-xl pl-2 opacity-60 ">
         Discover how our app transforms excess food into delicious meals for
         everyone
       </p>
       <button className="flex bg-[#43842F] rounded-md p-1 text-white font-poppins w-32 h-12 mt-3 text-xl justify-center items-center mx-auto">
         Explore!
       </button>
     </div>
     <div className="absolute w-[430px] left-[410px] bottom-0">
       <img src="/Images/Samosa.png" className="block "></img>
     </div>
     <img
       src="/Images/Biriyani.png"
       className="absolute w-[450px] right-0 top-[57%]"
     ></img>
   </div>
 );
}

export default ViewPage;