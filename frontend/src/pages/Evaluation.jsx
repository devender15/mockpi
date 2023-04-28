import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import RecordWebCamContext from "../context/WebcamContext";

import { Carousel } from "../components/";

import { Analysis } from "./";

const Evaluation = ({ evaluation, answers }) => {
  const navigate = useNavigate();
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [gotRate, setGotRate] = useState(false);
  const [analysis, setAnalysis] = useState({});
  const recordWebcam = useContext(RecordWebCamContext);

  useEffect(() => {
    if (!gotRate) {
      setGotRate(true);
      fetch("/analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: answers }),
      })
        .then((res) => res.json())
        .then((data) => setAnalysis(data));
    }
  }, [gotRate]);

  // if the user hasn't gave interview then redirect him/her to the homepage
  useEffect(() => {
    setTimeout(() => {
      if (evaluation?.length === 0) navigate("/");
    }, 1500);
  }, []);

  return (
    <>
      <div className="w-full h-screen p-2 mt-20">
        {!showAnalysis ? (
          <Carousel data={evaluation} setShowAnalysis={setShowAnalysis} />
        ) : (
          <Analysis setShowAnalysis={setShowAnalysis} analysis={analysis} recordWebcam={recordWebcam} />
        )}
      </div>
    </>
  );
};

export default Evaluation;
