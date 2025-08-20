export default function HeroSection() {
  return (
    <div className="flex justify-center bg-[#b7d5d6] h-[90vh] p-10 ">
      <div className=" flex flex-col space-y-6 w-[60%] mt-28">
        <h1 className="font-bold text-2xl">Brand New Items! Hurry up!</h1>
        <p className="font-extrabold text-7xl">Don't miss your </p>
        <p className="font-extrabold text-7xl"> chance to be the first!</p>
        <p className="font-bold">FREE SHIPPING with $99 purchase!</p>
        <button className="bg-[#efb9a7] cursor-pointer w-[180px] font-semibold hover:bg-black text-white py-2 px-4 ">
          Shop Now
        </button>
      </div>
      <div className="w-[40%]"></div>
    </div>
  );
}
