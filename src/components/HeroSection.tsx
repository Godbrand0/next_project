import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="container py-28 md:h-[90vh] h-[50vh] bg-[#b7d5d6] max-w-full">
      <div className="absolute md:pl-[3rem] pl-[1rem] z-13 md:space-y-6  w-[50%] md:pt-[3.3rem] container">
        <h4 className="font-bold text-[1.5rem] hidden md:block">
          Brand New Items! Hurry up!
        </h4>

        <h2 className="font-extrabold text-[1.2rem] md:text-[3rem]">
          Don't miss your chance to be the first!
        </h2>
        <h5 className="font-bold hidden md:block">
          FREE SHIPPING with $99 purchase!
        </h5>
        <button className="bg-[#efb9a7] cursor-pointer w-[5.8rem]  md:w-[8rem] text-xs font-semibold hover:bg-black text-white py-2 px-4 ">
          Shop Now
        </button>
      </div>
      <Image
        src="/hero.png"
        alt="hero image"
        className="object-contain absolute top-20 left-0"
        width={1920}
        height={1080}
      />
    </div>
  );
}
