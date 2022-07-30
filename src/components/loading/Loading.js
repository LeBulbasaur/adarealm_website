import React, { useEffect } from "react";
import "./loading.css";
// import ReactLoading from "react-loading";

function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  });

  return (
    <div className="main" style={{ top: window.pageYOffset + "px" }}>
      <div className="box">
        {/* <ReactLoading
          type={"spinningBubbles"}
          color={"black"}
          height={"200px"}
          width={"200px"}
        />*/}
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
