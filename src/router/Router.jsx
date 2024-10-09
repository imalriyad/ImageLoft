import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import ImageDetails from "../components/ImageDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "/imageDetails/:id",
        element: <ImageDetails />,
        
      }
      
      
    
  ]);

  export default router