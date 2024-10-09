import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DefaultImages from "./DefaultImages";

function Home() {
  return (
    <>
      <div>
        <div id="header-bg" className="md:h-[500px] h-[380px]">
          <div className="hero-overlay bg-opacity-50">
            {" "}
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </div>
              <DefaultImages></DefaultImages>
              <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
