import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoogleIcon from "../../../assets/icons/icon-google.png";
import RightImage from "../../../assets/login/login.png";
import Fluid1 from "../../../assets/login/1.png";
import Fluid2 from "../../../assets/login/2.png";
import Fluid3 from "../../../assets/login/3.png";

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [person, loading, error] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(user?.fname, user?.email, user?.password);
  };

  useEffect(() => {
    if (loading) return;
    if (person) navigate("/");
  }, [person, loading]);

  document.title = "Register | MockPI";

  return (
    <div className="login-from header-navbar light-gray-bg position-relative">
      <div className="row no-gutters flex items-center">
        <div className="col-lg-6 align-items-stretch position-relative white-bg">
          <div className="login-info">
            <h2 className="iq-fw-9 mb-3">Register</h2>
            <h6>
              Welcome to <span className="main-color">MockPI</span> please
              Register your account.
            </h6>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  value={user?.fname}
                  onChange={(e) => setUser({ ...user, fname: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={user?.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={user?.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group form-check mb-4">
                <div
                  className="btn-google mt-4 mb-6 cursor-pointer w-[30rem] shadow-lg justify-center p-2 rounded-md flex items-center space-x-4 bg-white"
                  onClick={signInWithGoogle}
                >
                  <img src={GoogleIcon} alt="GOOGLE" className="mx-2" />
                  Google
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button type="submit" className="slide-button button mr-3">
                  <div className="first">Register</div>
                  <div className="second">Register</div>
                </button>
                <Link
                  to="/auth/login"
                  className="slide-button button bt-border"
                >
                  <div className="first">Login</div>
                  <div className="second">Login</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 align-self-center position-relative">
          <div className="login-right-bar h-100 text-center">
            <img src={RightImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <img src={Fluid1} className="img-fluid login-footer-one" alt="" />
      <img src={Fluid2} className="img-fluid login-footer-two" alt="" />
      <img src={Fluid3} className="img-fluid login-footer-three" alt="" />
      <ToastContainer />
    </div>
  );
};

export default Register;
