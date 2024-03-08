import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="min-h-[5.2rem]"></div>
      <footer
        id="contact"
        className="w-full  flex flex-col gap-y-6 md:gap-y-2 bg-[#f4f4f4] pt-8 pb-2"
      >
    
        <div className="w-full">
          <div className="flex justify-center w-full">
            <div className="w-11/12 border-t-[1px] border-slate-300"></div>
          </div>
          <div className="flex flex-wrap justify-between items-center min-h-[5rem] px-4 lg:px-16">
            <div className="">
              <Link href="" className="text-xs">
                &#169; By Jatin | Rohit | Vansh (2024 - 2025) 
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-2">
              <Link href="" className="text-xs">
                Privacy Policy
              </Link>
              <Link href="" className="text-xs">
                Price Disclaimer
              </Link>
              <Link href="" className="text-xs">
                Responsible Disclosure
              </Link>
              <Link href="" className="text-xs">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
