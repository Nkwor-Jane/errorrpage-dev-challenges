import scarecrow from './imgs/Scarecrow.png';
import './App.css';
function App() {
  return (
    <div className=" w-full min-h-screen p-4 ">
       <div >
         <p className=" font-extrabold pl-4 md:pt-4 pt-2 ">404 NOT FOUND</p>
     </div>
      <div className="flex flex-col md:flex-row w-100 pt-10 items-center">
      <div className=" w-full md:w-1/2 pl-10 ">
          <img src={scarecrow} alt="left" className="w-full pr-6 pb-8 md:4/5"/>
        </div>
        <div className="w-100 md:w-1/2 pl-1 md:text-justify">
          <h1 className="font-extrabold text-3xl md:text-5xl leading-7 md:pb-6 pb-4 md:leading-10">I have bad news<br/>
          for you
          </h1>
          <p className="font-light md:font-medium text-1xl  md:text-2xl leading-6 md:leading-9 pb-12">The page you are looking 
            for might be removed or is
            temporarily unavailable.
          </p>
          <button className=" border-black bg-black text-white p-3">BACK TO HOMEPAGE</button>
        </div>
      </div>
      <div className="pt-8 md:pt-10">
       <p className="font-sm text-center ">Jane&copy;DevChallenges.io</p>
      </div>
    </div>
  );
}

export default App;
