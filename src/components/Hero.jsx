import { useState } from "react";
import { createClient } from "pexels";

function Hero() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const client = createClient(
      "l7KklyjZCSLGpHDWNJEZzKiItkZ6mir7l3ZvyxJUzDT76yRGfgCabJAM"
    );
    client.photos.search({ query, per_page: 10 }).then((photos) => {
      console.log(photos);
    });
  };
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="text-left md:text-center text-white my-[10%]">
          <h1 className="text-2xl  md:text-4xl font-bold text-white pb-[14px]">
            Download Royalty Free Stock Photos
          </h1>
          <p className="text-xs md:text-sm font-normal">
            Explore stock photography by category, all free for commercial use
          </p>

          {/* Input feild below */}
          <div className="pt-8 space-y-2">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for all images on ImageLoft"
              className="input placeholder:font-normal input-bordered text-black md:rounded-r-none w-full max-w-lg"
            />
            <button
              onClick={handleSearch}
              className="btn md:-ml-[1px] p-2 md:px-8 md:rounded-l-none md:w-auto max-w-lg w-full bg-[#36A754] hover:bg-[#36A754] text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
