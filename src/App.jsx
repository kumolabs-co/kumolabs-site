import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <img src="logo.png" className="w-96 z-10 drop-shadow-2xl"/>
      <Spline scene="https://prod.spline.design/yiBieDyDt7KOa3-8/scene.splinecode" className="absolute object-cover w-full h-full"/>
    </div>
  );
}

export default App;
