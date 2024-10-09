import { useContext, useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import Skeleton from "../components/Skeleton";
import { ImageContext } from "../contextapi/ContextProvider";

const DefaultImages = () => {

  const {allImages,handlePageination,
    isLoading,currentPage,pages,handlePrev,handleNext} = useContext(ImageContext)
 
  
  return (
    <div>
      <div className="max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto px-4 pt-8">
        {isLoading
          ? Array.from({ length: 36 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : allImages?.map((image) => (
              <Gallery key={image.id} allImages={image} />
            ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-5 text-gray-100 py-10">
        <button
          title="previous"
          type="button"
          onClick={handlePrev}
          className="inline-flex hover:bg-mainColor items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {pages?.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageination(page)}
            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 ${
              page === currentPage ? "activeBtn" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          title="next"
          type="button"
          onClick={handleNext}
          className="inline-flex hover:bg-mainColor items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DefaultImages;
