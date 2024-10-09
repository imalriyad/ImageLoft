/* eslint-disable react/prop-types */

import { MdFavorite } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { Link } from "react-router-dom";



const Gallery = ({ allImages }) => {
    console.log(allImages);
    
    const formatNumber = (num) => {
      if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}k`; // Format to "3.0k" for 3000
      }
      return num;
    };
    
    
  return (
    <>
    <Link to={`/imageDetails/${allImages.id}`}> <div key={allImages.id} className="relative group">
      {/* Image */}
      <img
        className="md:h-[300px] h-[100px] shadow-lg object-cover border md:w-[300px] w-[250px] rounded-lg"
        src={
          allImages?.largeImageURL 
        }
        alt="stock image"
      />
      

      {/* Dark overlay (visible on hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

      {/* Heart icon (top-right, visible on hover) */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => {
            // Add to favorites functionality
            console.log("Added to favorites!");
          }}
          className="bg-opacity-80 p-1 rounded-full"
        >
          <MdFavorite  className="text-white text-2xl" />
        </button>
      </div>

    {/* Views and download counts (bottom-left, visible on hover) */}
<div className="absolute top-2 left-2 text-white text-sm bg-black bg-opacity-60 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
  <div className="flex items-center gap-2">
    <div className="flex items-center">
      <FaEye className="mr-1" /> {/* Add margin for spacing */}
      <span>{formatNumber(allImages.views)}</span> {/* Format views count */}
    </div>
    <div className="flex items-center">
      <IoMdCloudDownload className="mr-1" /> {/* Add margin for spacing */}
      <span>{formatNumber(allImages.downloads)}</span> {/* Format downloads count */}
    </div>
  </div>
</div>

    {/* Views and download counts (bottom-left, visible on hover) */}
<div className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-60 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
  <div className="flex items-center gap-2">
    <div className="flex items-center">
     {allImages.tags}
    </div>
   
  </div>
</div>

    </div>
    </Link>



    </>
  );
};

export default Gallery;
