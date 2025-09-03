import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loading flex justify-center items-center">
      <svg width="64px" height="48px" className="block">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          className="back fill-none stroke-[3px] stroke-[#d9e6bc]"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          className="front fill-none stroke-[3px] stroke-[#466923]"
        ></polyline>
      </svg>
      <style>{`
        .loading svg polyline.front {
          stroke-dasharray: 48, 144;
          stroke-dashoffset: 192;
          animation: dash_682 1.4s linear infinite;
        }

        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
