import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { Details, Questions, Evaluation, AuthRoutes, Home } from "./pages/";
import { Navbar } from "./components/";
import './App.css';

import Webcam from "./context/Webcam";
import { ThemeProvider } from "styled-components";
import customTheme from "./themes/theme";

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [name, setName] = useState("");
  const [evaluation, setEvaluation] = useState([]);
  const navigate = useNavigate();
  const [person, loading, error] = useAuthState(auth);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", person?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!person) return navigate("/auth/login");
    fetchUserName();
  }, [person, loading]);

  return (
    <>
    <ThemeProvider theme={customTheme}>
      <Webcam>
        {/* <Navbar loggedIn={person} logout={logout} /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Details
                setData={setData}
                setAnswers={setAnswers}
                person={person}
                setEvaluation={setEvaluation}
              />
            }
          />
          <Route
            exact
            path="/questions"
            element={
              <Questions
                data={data}
                answers={answers}
                setEvaluation={setEvaluation}
                setAnswers={setAnswers}
              />
            }
          />
          <Route
            exact
            path="/evaluation"
            element={<Evaluation evaluation={evaluation} answers={answers} />}
          />
          <Route exact path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </Webcam>
      </ThemeProvider>
    </>
  );
}

export default App;
