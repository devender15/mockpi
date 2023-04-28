import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoimg from "./../assets/logo.png";
import Vtab from "../components/vtab";

const Wrapper = styled.div`
  width: calc(100% - 60px);
  background: #f0ebf8;
  box-shadow: inset 2px -10px 5px 0px rgb(0 0 0 / 11%);
  margin: 60px 30px 30px;
  border-radius: 30px;
  margin: 60px auto;
  max-width: 1920px;
`;

const Logo = styled.div`
  width: 278px;
  height: 90px;
  background-color: #fff;
  border-radius: 0 50px 50px 0;
  top: -30px;
  position: relative;
  img {
    max-width: 90%;
  }
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  min-height: 400px;
  margin-top: 30px;
  padding-bottom: 100px;
`;
const Question = styled.div`
     background-color: #fff;
    border: solid 5px #4500F4;
    border-radius: 40px;
    min-height: 400px;
    box-shadow: 6px 0px 6px 0px rgb(0 0 0 / 16%);
    padding: 30px;
    min-height: 300px;
    h2 {
      text-align:center;
      margin:0;
      font-size:22px;
      font-weight:normal;
      margin-bottom:10px;
    }
    p {
       text-align:center;
       margin-bottom:20px; 
       margin-top:0;
       font-weight:bold;
       font-size:22px;
    }
    @media screen and (max-width: 991px) { 
       margin: 20px;
        padding: 10px;
   }
`;
 

const Test = ({ data, setShowAnalysis }) => {
    const [index, setIndex] = useState(0);
    const [analysisButton, setAnalysisButton] = useState(false);
  
    useEffect(() => {
      if (index === data.length - 1) setAnalysisButton(true);
      else setAnalysisButton(false);
    }, [index]);


  return (
    <React.Fragment>
      <Wrapper>
        <Logo>
          <img src={logoimg} alt="logo" />
        </Logo>
        <Container>
          <Question>
            <h2>Question {index + 1}</h2>
            <p>{data[index]?.question}</p>
            <Vtab data={data} index={index} setIndex={setIndex} analysisButton={analysisButton}  setAnalysisButton={setAnalysisButton} setShowAnalysis={setShowAnalysis} />
          </Question>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Test;
