import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import notify from "../utils/toast";
import RecordWebCamContext from "../context/WebcamContext";

import { Loader } from "../components/";

import styled from "styled-components";
import logoimg from "./../assets/logo.png";
import Video from "./../assets/audio_active.mp4";

const Wrapper = styled.div`
  width: calc(100% - 60px);
  background: #f0ebf8;
  box-shadow: inset 2px -10px 5px 0px rgb(0 0 0 / 11%);
  margin: 60px 30px 30px;
  border-radius: 30px;
  margin: 60px auto;
  max-width: 1920px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Logo = styled.div`
  max-width: 278px;
  height: 90px;
  background-color: #fff;
  border-radius: 0 50px 50px 0;
  top: -30px;
  position: relative;
  img {
    max-width: 90%;
  }
  @media screen and (max-width: 991px) {
    width: 90%;
    padding-left: 10px;
  }
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  min-height: 400px;
  margin-top: 30px;
  padding-bottom: 100px;
  @media screen and (max-width: 991px) {
    width: 90%;
  }
`;
const QuestionOne = styled.div`
  background-color: #fff;
  border: solid 5px #4500f4;
  border-radius: 40px;
  min-height: 400px;
  box-shadow: 6px 0px 6px 0px rgb(0 0 0 / 16%);
  padding: 30px;
  min-height: 300px;
  @media screen and (max-width: 991px) {
    padding: 10px;
  }
  .button-action {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    z-index: 111;
    position: relative;
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
    button {
      background-color: #4500f4;
      color: #fff;
      font-size: 24px;
      border-radius: 50px;
      border: none;
      min-width: 228px;
      min-height: 57px;
      -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.16);
      -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.16);
      box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.16);
      margin-left: 10px;
      cursor: pointer;
      margin-right: 10px;
      @media screen and (max-width: 991px) {
        margin-bottom: 10px;
        min-width: auto;
      }
    }
  }
  .listening {
    color: #707070;
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
    font-style: italic;
  }

  video {
    @media screen and (max-width: 991px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const QuestionOneBlock = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 20px;
  h2 {
    text-align: center;
    margin: 0;
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 0;
    font-weight: normal;
    font-size: 22px;
  }
`;
const VideoBlock = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Question = ({ data, setEvaluation, answers, setAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questionLine, setQuestionLine] = useState(data[currentQuestion]);
  const recordWebcam = useContext(RecordWebCamContext);
  const [currentTab, setCurrentTab] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    if (data?.length === 0) navigate("/");
  }, [data]);

  useEffect(() => {
    if(listening) {
      videoRef.current.play();
    } else{
      videoRef.current.pause();
    }
  }, [listening])

  useEffect(() => {
    setAnswers("");
    if (recordWebcam.status === "START") recordWebcam.start();
  }, []);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      return;
    } else if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      notify(
        toast,
        "Your browser does not support speech recognition!",
        "warning"
      );
    } else {
      notify(
        toast,
        "Your browser does not support speech recognition",
        "warning"
      );
    }
  }, []);

  useEffect(() => {
    const tab = localStorage.getItem("tab");
    setCurrentTab(tab);
  }, []);

  // text to speech whenever the new question renders
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(questionLine);
    utterance.onend = () => {
      speechSynthesis.cancel();
      handleSpeak();
    };
    speechSynthesis.speak(utterance);
  }, [questionLine, currentQuestion]);

  const handleSpeak = () => {
    setListening(true);
    // clearing out the previous speech text
    resetTranscript();

    // start listening for speech recognition
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const handleStopListening = () => {
    setListening(false);
    // now stopping the recognition for listening more
    SpeechRecognition.stopListening();
    
    // saving the last answer to the state
    setAnswers((prev) => {
      let arr = [...prev];
      arr.push({ question: data[currentQuestion], answer: transcript });
      return arr;
    });
  };

  const handleSkipQuestion = () => {
    // if speech recognition is enabled then close it first.
    setListening(false);
    SpeechRecognition.stopListening();

    resetTranscript();

    // if a person skips the question, then its value should be an empty string
    setAnswers((prev) => {
      let newData = [...prev];
      newData.push({ question: [data[currentQuestion]], answer: "" });
      return newData;
    });

    // switching to the next question
    setCurrentQuestion((prev) => {
      let newVal = prev;
      newVal += 1;
      setQuestionLine(data[newVal]);
      return newVal;
    });
  };

  const handleSwitchToNextQuestion = () => {
    handleStopListening();

    // clearing the previous transcript and listening state and also stopping the ongoing speech recognition
    resetTranscript();

    // switching to the next question
    setCurrentQuestion((prev) => {
      let newVal = prev;
      newVal += 1;
      setQuestionLine(data[newVal]);
      return newVal;
    });
  };

  const handleSubmitAnswers = () => {
    setListening(false);
    // now stopping the recognition for listening more
    SpeechRecognition.stopListening();

    // saving the last answer to the state
    setAnswers((prev) => {
      let arr = [...prev];
      arr.push({ question: data[currentQuestion], answer: transcript });

      // clearing the previous transcript and listening state and also stopping the ongoing speech recognition
      resetTranscript();

      setLoading(true);

      // sending request to api
      fetch("/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: arr,
          interview_type: currentTab,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            if (data.status !== "ERROR") {
              setEvaluation(data);
              navigate("/evaluation");
            } else throw new Error("Internal Server Error");
          } catch {
            notify(toast, "Something went wrong!", "error");
          }
        });

      return arr;
    });
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Logo>
          <img src={logoimg} alt="logo" />
        </Logo>
        <Container>
          <QuestionOne>
            <QuestionOneBlock>
              <h2>Question {currentQuestion + 1}</h2>
              <p>{data[currentQuestion]}</p>
            </QuestionOneBlock>
            <VideoBlock>
              <video ref={videoRef} width="300" height="300" className="mx-auto" autoPlay loop>
                <source src={Video} type="video/mp4" />
              </video>
            </VideoBlock>

            <source src={Video} type="video/mp4" />
            <div className="listening">
              {listening ? "Listening..." : "Stopped !"}
            </div>
            <div className="button-action">
              {currentQuestion < data?.length - 1 ? (
                <>
                  <button type="submit" onClick={handleSkipQuestion}>
                    Skip
                  </button>
                  <button type="submit" onClick={handleSwitchToNextQuestion}>
                    Next
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmitAnswers}
                  disabled={loading}
                >
                  Submit
                </button>
              )}
            </div>
            {loading && (
              <div className="w-full flex" style={{ margin: "2rem 0" }}>
                <Loader />
              </div>
            )}
          </QuestionOne>
        </Container>
      </Wrapper>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Question;
