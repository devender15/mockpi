import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import logoimg from "./../assets/logo.png";
import Information from "./../assets/information.png";
import Questions from "./../assets/questions.png";
import Said from "./../assets/said.png";
import Tabs from "../components/tab";
import RecordWebCamContext from "../context/WebcamContext";

const Wrapper = styled.div`
  width: calc(100% - 60px);
  background: #f0ebf8;
  box-shadow: inset 2px -10px 5px 0px rgb(0 0 0 / 11%);
  margin: 60px 30px 30px;
  border-radius: 30px;
  margin: 60px auto 0;
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
  padding: 20px;
  min-height: 400px;
  margin-top: 30px;
`;

const Hr = styled.div`
  margin-top: 60px;
  margin-bottom: 16px;
  text-align: center;
  position: relative;
  span {
    color: #000000;
    font-size: 30px;
    background-color: #f0ebf8;
    position: relative;
    z-index: 11;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (max-width: 991px) {
      font-size: 20px;
    }
  }
  :after {
    content: "";
    height: 2px;
    width: 100%;
    background: #707070;
    position: absolute;
    left: 0;
    top: 50%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 33.33%;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 991px) {
    justify-content: center;
    display: flex;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 991px) {
      justify-content: center;
    }
  }
`;

const Card = styled.div`
  background: #ffffff;
  -webkit-box-shadow: 6px 0px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 6px 0px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 6px 0px 6px 0px rgba(0, 0, 0, 0.16);
  max-width: 320px;
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  div {
    min-height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 60px;
    }
  }
  h2 {
    font-size: 24px;
    color: #707070;
    font-weight: normal;
    text-align: center;
    margin: 0;
    max-width: 90%;
    margin-top: 20px;
  }
`;

const Details = ({ setData, person, setEvaluation, setAnswers }) => {
  const recordWebcam = useContext(RecordWebCamContext);
  const navigate = useNavigate();

  document.title = "MockPI | Homepage";
  
  useEffect(() => {
    if (!person) navigate("/auth/login");
  }, [person])

  return (
    <>
      <div className="mt-20">
        <Wrapper>
          <Logo>
            <img src={logoimg} alt="logo" />
          </Logo>
          <Container>
            <Tabs setData={setData} />
            <Hr>
              <span>Let's get started!</span>
            </Hr>
            <Row>
              <Col>
                <Card>
                  <div>
                    <img src={Information} alt="information" />
                  </div>
                  <h2> Just put in your information</h2>
                </Card>
              </Col>
              <Col>
                <Card>
                  <div>
                    <img src={Questions} alt="questions" />
                  </div>
                  <h2>Answer the questions as best as you can</h2>
                </Card>
              </Col>
              <Col>
                <Card>
                  <div>
                    <img src={Said} alt="said" />
                  </div>
                  <h2>Take a look back at what you said</h2>
                </Card>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    </>
  );
};

export default Details;
