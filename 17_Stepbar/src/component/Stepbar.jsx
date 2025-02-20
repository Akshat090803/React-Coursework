import { useState } from "react";
import "./stepbar.css";
export function StepBar() {
  const [progressWidth, setprogressWidth] = useState(0);
  const [currBall, setCurrBall] = useState(1);

  function handleNext() {
    setprogressWidth((prev) => prev + 33);
    setCurrBall(currBall + 1);
  }
  function handlePrev() {
    setprogressWidth((prev) => prev - 33);
    setCurrBall(currBall - 1);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div className="parent">
          <div className="progress"></div>
          <div
            className="progress-increase"
            style={{ width: `${progressWidth}%` }}
          ></div>
          <div className={`ball one ${currBall >= 1 && "active"}`}>1</div>
          <div className={`ball two ${currBall >= 2 && "active"}`}>2</div>
          <div className={`ball three ${currBall >= 3 && "active"}`}>3</div>
          <div className={`ball four ${currBall >= 4 && "active"}`}>4</div>
        </div>

        <div className="btn-div">
          <button disabled={currBall == 1 && true} onClick={handlePrev}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currBall == 4 && true}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
