import { FaSpinner } from "react-icons/fa";

const Skeleton = () => (
  <div className="relative md:h-[300px] h-[100px] md:w-[300px] w-[250px] rounded-lg bg-gray-300 animate-pulse">
    {/* Loader icon in the center */}
    <div className="absolute inset-0 flex items-center justify-center">
      <FaSpinner className="text-gray-500 animate-spin text-3xl" />
    </div>
  </div>
);

export default Skeleton;
