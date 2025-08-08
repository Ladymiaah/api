import HeroBanner from "./component/HeroBanner";
import Navbar from "./component/Navbar";

const App: React.FC = () => {
  return(
   <div className="  flex justify-center  items-center  px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 mb-20">
        <div className="bg-[#f9f9f9] w-full max-w-5xl rounded-2xl">
      <Navbar/>
      <HeroBanner/>
          </div>
          </div>
  )
}

export default App;