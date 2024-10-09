/* eslint-disable react/prop-types */





const Gallery = ({ allImages }) => {
    
  return (
    <>
      {" "}
      <div key={allImages.id}>
        <img
          className="md:h-[300px] h-[100px] shadow-lg object-cover border md:w-[300px] w-[250px] rounded-lg"
          src={
            allImages.largeImageURL ||
            "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
          }
          alt="stock image"
        />
      </div>
    </>
  );
};

export default Gallery;
