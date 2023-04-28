import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import RecordWebCamContext from "../context/WebcamContext";

// import { easeQuadInOut } from "d3-ease";
// import { AnimatedProgressProvider } from "../components";

// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analysis = ({ setShowAnalysis }) => {
  const [today, setToday] = useState("");
  const recordWebcam = useContext(RecordWebCamContext);

  const topic = localStorage.getItem("topic")
    ? localStorage.getItem("topic")
    : "";

  useEffect(() => {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    setToday(date + "/" + month + "/" + year);

    recordWebcam.stop(); // to stop recording
  }, []);

  return (
    <div className="h-screen my-4">
      <h1 className="text-center font-bold text-4xl text-teal-500 my-2">
        Overall Analysis
      </h1>

      <p className="text-center">
        This Rating is based on the quality of their content, clarity,
        coherence, and completeness in addressing the question.
      </p>

      <section className="my-2 p-2 flex items-center justify-around">
        <main className="basis-1/2 my-6 flex flex-col space-y-4">
          <div className="w-full text-center mb-6">
            <ul className="flex items-center space-x-6 text-lg text-teal-700 px-4">
              <li>
                Topic : <span className="capitalize">{topic}</span>
              </li>
              <li>
                Date : <span>{today}</span>
              </li>
              <li>
                Test No. : <span>XYZ</span>
              </li>
            </ul>
          </div>

          {/* <div style={{ width: "40%" }}>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={66}
              duration={1.4}
              easingFunction={easeQuadInOut}
              repeat
            >
              {(value) => {
                return (
                  <CircularProgressbar
                    value={analysis.rating ? Math.round(analysis.rating) : 0}
                    text={`${
                      analysis.rating ? Math.round(analysis.rating) : 0
                    }%`}
                    styles={buildStyles({ pathTransition: "none" })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div> */}
          {recordWebcam.previewRef && (
            <div className="w-1/2 h-1/2">
              <video
                ref={recordWebcam.previewRef}
                autoPlay
                muted
                loop
                controls
                className="w-full h-full"
              />
            </div>
          )}
        </main>

        <main>
          {/* <div className="border border-1 p-2 w-full h-full">

          </div> */}
        </main>
      </section>

      <section className="w-full mt-1 text-center flex items-center space-x-3 justify-center">
        <button
          className="bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] px-4 py-2 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:shadow-md hover:ring hover:ring-teal-300 w-[10rem]"
          onClick={() => setShowAnalysis(false)}
        >
          Back
        </button>
        <Link
          to="/"
          role="button"
          className="bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] px-4 py-2 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:shadow-md hover:ring hover:ring-teal-300 w-[10rem]"
        >
          Next Test
        </Link>
      </section>
    </div>
  );
};

export default Analysis;
