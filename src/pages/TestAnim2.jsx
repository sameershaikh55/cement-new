import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

const TestAnim2 = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.getElementById("checkmark-group");
      if (header !== null) {
        header.classList.toggle("blockElem", window.scrollY > 200);
      }
    });
  }, []);
  return (
    <div>
      <div class="textCOnt">
        <div>
          <h1>PLEASE SCROLL TO SEE THE ANIMATION</h1>
        </div>
      </div>
      <div class="svgCont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="checkmark-group"
          className="noneCL"
          viewBox="0 0 128 128"
        >
          <title>Successful Login</title>
          <circle id="circle" cx="64" cy="64" r="59.4" />
          <path id="checkmark" d="M24.75 62l27.5 27.5 51-51" />
        </svg>
      </div>
    </div>
  );
};

export default TestAnim2;
