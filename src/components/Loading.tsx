
import { useEffect, useState } from "react";
import logo from "../../public/logo/logo.png";
import logo1 from "../../public/logo/logo without bg.png";
import logo2 from "../../public/logo/LOGO & J without bg.png";

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
            {/* <span className="text-white font-bold text-3xl">J</span> */}
            <img src={logo2} alt="logo" className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse" />

            <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-blue-500 rounded-2xl animate-spin opacity-30"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Jem's Infotech</h2>
        <p className="text-gray-600 mb-8">Crafting your digital experience...</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
