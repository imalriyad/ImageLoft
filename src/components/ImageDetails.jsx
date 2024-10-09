
import Navbar from "./Navbar";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useContext } from "react";
import { ImageContext } from "../contextapi/ContextProvider";
import { useParams } from "react-router-dom";


const ImageDetails = () => {
    const {allImages} = useContext(ImageContext)
    const {id} = useParams()
    const imageDetails = allImages?.find((image) => image.id === Number(id));

     const handleDownload = async () => {
        const response = await fetch(imageDetails?.largeImageURL);
        const blob = await response.blob(); // Get the image as a blob
        const url = window.URL.createObjectURL(blob); // Create a URL for the blob
    
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ImagebyImageLoft.jpg'; // Set the filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up the blob URL
      };
     
    
  return (
    <div id="header-bg" className="md:h-[100px] h-screen">
          <div className="hero-overlay bg-opacity-50">
            {" "}
            <Navbar></Navbar>
            <div className="md:bg-[#F3F3F3] relative">
  <div className="mx-auto max-w-screen-xl px-4">
    <div className="relative">
      <img
        src={imageDetails?.largeImageURL}
        className="md:h-[800px] h-[200px] border object-cover w-full"
        alt=""
      /> 
    <div>
    <button
  onClick={handleDownload} // Attach the click event handler
  className="absolute download-button  bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1" // Added flex and gap
> 
  Download <PiDownloadSimpleBold />
</button>

    </div>

    
    </div>
   
  </div>
</div>

          </div>
        </div>
  );
};

export default ImageDetails;
