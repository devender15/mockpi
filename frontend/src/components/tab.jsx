import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../utils/toast";
import { Loader } from "../components/";

import RecordWebCamContext from "../context/WebcamContext";

import { Radio, RadioGroup } from "react-styled-radio";
import styled from "styled-components";
import ToggleSwitch from "../components/ToggleSwitch";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 0;
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  ::focus {
    border: none;
  }
  ::placeholder {
    color: palevioletred;
  }
`;

const FromGroup = styled.div`
  font-size: 18px;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
 &.buttonAction {
   display: flex;
   width:100%;
   
  }
.label {
  margin-right:10px;
}
.difficulty {
    display: flex;
    flex-direction: column;
     @media screen and (max-width: 991px) { 
       margin-bottom:20px;
      }
    .label {
      margin-bottom:10px;
    }
    
  }
.button-action {
 display: flex;
 justify-content: center;
 margin-top: 30px;
  width:100%;
   button {
    background-color: #4500F4;
    color: #fff;
    font-size: 24px;
    border-radius: 50px;
    border: none;
    min-width: 228px;
    min-height: 57px;
    -webkit-box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.16);
    cursor: pointer;
}
`;

const TabsBlock = ({ setData }) => {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);
  const [recordVideo, setRecordVideo] = useState(false);
  const [interviewType, setInterviewType] = useState("");
  const navigate = useNavigate();
  const recordWebcam = useContext(RecordWebCamContext);

  useEffect(() => {
    if (recordVideo) recordWebcam.open();
    // else recordWebcam.stop();
  }, [recordVideo]);

  const handleSubmitTechnicalInterview = (e) => {
    e.preventDefault();

    setLoading(true);
    fetch("/interview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: topic,
        num_questions: questions,
        difficulty: difficulty,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          localStorage.setItem("topic", topic);
          if (data.status !== "ERROR") {
            setData(data.data);
            setLoading(false);
            navigate("/questions");
          } else throw new Error("Internal Server Error");
        } catch (err) {
          console.log("err " + err);
          notify(toast, "Something went wrong!", "error");
        } finally {
          setLoading(false);
        }
      });
    setTopic("");
    setQuestions("");
  };

  const handleSubmitBehavioralInterview = (e) => {
    e.preventDefault();

    setLoading(true);
    fetch("/behavioral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        no_of_questions: questions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          localStorage.setItem("topic", topic);
          if (data.status !== "ERROR") {
            setData(data.data);
            setLoading(false);
            navigate("/questions");
          } else throw new Error("Internal Server Error");
        } catch (err) {
          console.log("err " + err);
          notify(toast, "Something went wrong!", "error");
        } finally {
          setLoading(false);
        }
      });
    setQuestions("");
  };

  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Technical">
          <div>
            <form onSubmit={handleSubmitTechnicalInterview}>
              <FromGroup>
                <label>Enter Topic</label>
                <Input
                  type={"text"}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                ></Input>
              </FromGroup>
              <FromGroup>
                <label>Number of Questions</label>
                <Input
                  type={"text"}
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                ></Input>
              </FromGroup>
              <Row>
                <Col>
                  <div className="difficulty">
                    <label className="label">Difficulty Level</label>
                    <RadioGroup
                      horizontal
                      name="difficulty"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <Radio small value="beginner" label="Easy" />
                      <Radio small value="intermediate" label="Medium" />
                      <Radio small value="advanced" label="Advanced" />
                    </RadioGroup>
                  </div>
                </Col>
                <Col>
                  <label className="label">Video Playback</label>
                  <ToggleSwitch
                    id="video-on"
                    name="record"
                    checked={recordVideo}
                    onChange={(checked) => setRecordVideo(checked)}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="buttonAction">
                  <div className="button-action flex flex-col justify-center items-center space-y-8">
                    <button
                      type="submit"
                      disabled={!topic || !questions || !difficulty}
                    >
                      Start Interview
                    </button>
                    {loading && <Loader />}
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Tab>
        <Tab label="Behavioral">
          <div>
            <form onSubmit={handleSubmitBehavioralInterview}>
              <FromGroup>
                <label>Number of Questions</label>
                <Input
                  type={"text"}
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                ></Input>
              </FromGroup>
              <Row>
                <Col className="buttonAction">
                  <div className="button-action flex flex-col justify-center items-center space-y-8">
                    <button type="submit" disabled={!questions}>
                      Start Interview
                    </button>
                    {loading && <Loader />}
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const changeTab = (button) => {
    setActiveTab(button);
  };
  let content;
  let buttons = [];
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        buttons.push(child.props.label);
        if (child.props.label === activeTab) content = child.props.children;
      })}

      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content">{content}</div>
    </div>
  );
};

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={button === activeTab ? "active" : ""}
            onClick={() => {
              localStorage.setItem("tab", button);
              changeTab(button);
            }}
          >
            {button}
          </button>
        );
      })}
      <ToastContainer />
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default TabsBlock;
