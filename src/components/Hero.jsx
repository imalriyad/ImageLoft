import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../contextapi/ContextProvider";

function Hero() {
  const {setQuery} = useContext(ImageContext)
  const [userInput,setUserInput] = useState('')

  const handleSearch =()=>{
    setQuery(userInput)
}

useEffect(() => {
  const handleKeyDown = (event) => {
  
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default action
      handleSearch(); // Trigger the search
    }
  };

  // Attach event listener to the window
  window.addEventListener('keydown', handleKeyDown);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [userInput]); // Depend on userInput to ensure it has the latest value

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
              onChange={(e) => setUserInput(e.target.value)}
              type="text"
              placeholder="Search for all images on ImageLoft"
              className="input placeholder:font-normal input-bordered text-black md:rounded-r-none w-full max-w-lg"
            />
            <button
            id="searchBtn"
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
