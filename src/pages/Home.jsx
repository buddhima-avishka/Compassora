import React from "react";
import ImageOne from "../components/ImageOne";
import ImageTwo from "../components/ImageTwo";
import ImageThree from "../components/ImageThree";

function Home() {
  return (
    <div className="min-h-screen">
      <div >
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
}

export default Home;
