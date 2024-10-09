import { createContext } from "react";
export const ImageContext = createContext(null);
import { useEffect, useState } from "react";
const ContextProvider = ({ children }) => {

    const [allImages, setAllImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalImages, setTotalImages] = useState(385); 
    const numberOfImage = 35;
    const numberOfpages = Math.ceil(totalImages / numberOfImage);
    const pages = [...Array(numberOfpages).keys()];
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    
    

    useEffect(() => {
        setIsLoading(true);
    
        fetch(
          `https://pixabay.com/api/?key=45953834-739d7ad0536c4ace47360e588&q=${query}&per_page=36&page=${currentPage}`
        )
          .then((response) => response.json())
          .then((data) => {
            setAllImages(data.hits);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(true);
          });
      }, [currentPage,query]);







    useEffect(() => {
      setIsLoading(true);
  
      fetch(
        `https://pixabay.com/api/?key=45953834-739d7ad0536c4ace47360e588&category=backgrounds,fashion,nature,places,animals,food,sports,travel,music&per_page=36&page=${currentPage}`
      )
        .then((response) => response.json())
        .then((data) => {
          setAllImages(data.hits);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(true);
        });
    }, [currentPage]);
  
    useEffect(() => {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    }, [currentPage]);
  
    const handlePageination = (page) => {
      setCurrentPage(page);
    };
  
    const handleNext = () => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Default to desktop value
  
    useEffect(() => {
      const handleResize = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
  
        if (isMobile) {
          setTotalImages(105);
        } else {
          setTotalImages(385); // For both desktop and tablet
        }
      };
  
      // Run the handler on initial load
      handleResize();
  
      // Add event listener for resizing
      window.addEventListener('resize', handleResize);
  
      // Cleanup listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    





  
  const ImageInfo = {
  allImages,handlePageination,
  isLoading,numberOfImage,totalImages,currentPage,pages,handlePrev,handleNext,setQuery
  };

  return (
    <ImageContext.Provider value={ImageInfo}>{children}</ImageContext.Provider>
  );
};

export default ContextProvider;