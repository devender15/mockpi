import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import Critical from "./../assets/Critical.svg";
import Answer from "./../assets/Answer.svg";
import Improvement from "./../assets/Improvement.svg";
import Arrow from "./../assets/arrow.svg";
// import "react-tabs/style/react-tabs.css";

const TabAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    max-width: 300px;
    margin: 30px auto 30px;
  }
  .button {
    margin-left: 20px;
    @media screen and (max-width: 991px) {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
`;

export default function App({
  data,
  index,
  setIndex,
  analysisButton,
  setAnalysisButton,
  setShowAnalysis,
}) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex((prev) => {
      if (newIndex > data?.length - 1) return prev;
      else prev = newIndex;
      return prev;
    });
  };

  const handlePrev = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? 0 : newIndex);
    if (newIndex === data?.length - 2) setAnalysisButton(false);
  };

  return (
    <div>
      <Tabs
        selectedIndex={currentTab}
        onSelect={(index) => setCurrentTab(index)}
      >
        <TabList id="controlled-tab-example" defaultindex={0}>
          <Tab>
            <div className="tab">
              <div className="icon-block">
                <div className="arrow">
                  <img src={Arrow} alt="Critical" />
                </div>
                <div className="icon">
                  <img src={Critical} alt="Critical" />
                </div>
              </div>
              <p>Critical Comment</p>
            </div>
          </Tab>
          <Tab>
            <div className="tab">
              <div className="icon-block">
                <div className="arrow">
                  <img src={Arrow} alt="Critical" />
                </div>
                <div className="icon">
                  <img src={Improvement} alt="Improvement" />
                </div>
              </div>

              <p>Areas of Improvement</p>
            </div>
          </Tab>
          <Tab>
            <div className="tab">
              <div className="icon-block">
                <div className="arrow">
                  <img src={Arrow} alt="Critical" />
                </div>
                <div className="icon">
                  <img src={Answer} alt="Answer" />
                </div>
              </div>
              <p>Reference Answer</p>
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="panel-content">
            <h2>Critical Comment</h2>
            <div className="panel-info">
              {data[index]?.score?.map((point, idx) => {
                return point?.length > 0 ? (
                  <p key={idx} className="text-white text-lg mt-4">
                    {point}
                  </p>
                ) : null;
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Areas of Improvement</h2>
            <div className="panel-info">
              <p>{data[index]?.reference}</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Reference Answer</h2>
            <div className="panel-info">
              <p>{data[index]?.reference}</p>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <TabAction>
        <button
          className="button"
          onClick={handlePrev}
        >
          Previous
        </button>
        {analysisButton ? (
          <button
            className="button"
            onClick={() => setShowAnalysis(true)}
          >
            Show Analysis
          </button>
        ) : (
          <button
            className="button"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </TabAction>
    </div>
  );
}
