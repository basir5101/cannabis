// import { Download } from "lucide-react";
import { Download } from "lucide-react";
import React from "react";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="px-6 py-10 bg-gray-800 text-white text-center"
    >
      <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
        Ready to Elevate Your Shopping Experience?
      </h2>
      <p className="mb-6">
        Join thousands who are finding cannabis stores and paying with Bitcoin.
      </p>
      <div className="flex justify-center gap-4">
        <button class="rounded-md text-sm px-3.5 bg-blue-100 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary text-primary ">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-primary transition duration-300 group-hover:text-white ease">
            <span className="flex">
              <Download />
              <span className="ml-1">Download on iOS</span>{" "}
            </span>
          </span>
        </button>
        <button class="rounded-md text-sm px-3.5 bg-black text-secondary py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-secondary transition duration-300 group-hover:text-black ease">
            <span className="flex">
              <Download />
              <span className="ml-1">Get it on Android</span>{" "}
            </span>{" "}
          </span>
        </button>
      </div>
    </section>
  );
};

export default DownloadSection;
