import React from "react";

// import "../css/settings.css";
import "../css/typography.css";
import "../css/style.css";
import "../css/responsive.css";

import First from "../assets/revslider/assets/02f6c-bg.jpg";
import Second from "../assets/revslider/assets/edad9-08.png";
import Third from "../assets/revslider/assets/69d21-04.png";
import Fourth from "../assets/revslider/assets/77014-05.png";
import Fifth from "../assets/revslider/assets/7ae95-06.png";
import Sixth from "../assets/revslider/assets/b2422-10.png";
import Seventh from "../assets/revslider/assets/bc86e-12.png";
import Eight from "../assets/revslider/assets/b1482-09.png";
import Ninth from "../assets/revslider/assets/b33c3-11.png";
import Loader from "../assets/loader.gif";

const Home = () => {
  // changing the title of the page
  document.title = "MockPI | Homepage";

  return (
    <>
      {/* <div id="loading">
        <div id="loading-center">
          <img src={Loader} alt="loader" />
        </div>
      </div> */}

      <div className="iq-banner">
        <div
          id="rev_slider_3_1_wrapper"
          className="rev_slider_wrapper fullwidthbanner-container"
          data-alias="marketive-1"
          style={{
            margin: "0px auto",
            backgroundColor: "transparent",
            padding: "0px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <div
            id="rev_slider_3_1"
            className="rev_slider fullwidthabanner tp-overflow-hidden"
            // style={{ display: "none" }}
            data-version="5.2.6"
          >
            <ul>
              <li
                data-index="rs-2"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="600"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                <img
                  src={First}
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="off"
                  className="rev-slidebg"
                  data-no-retina
                />

                <h1
                  className="tp-caption tp-resizeme"
                  id="slide-2-layer-14"
                  data-x="29"
                  data-y="center"
                  data-voffset="-105"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:50px;opacity:0;s:1000;e:Power4.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style={{
                    zIndex: 5,
                    whiteSpace: "nowrap",
                    fontSize: "60px",
                    lineHeight: "70px",
                    fontWeight: 700,
                    color: "rgba(27, 14, 61, 1.00)",
                    fontFamily: "Nunito",
                  }}
                >
                  More Possibilities <br /> with Markethon{" "}
                </h1>

                <p
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-2"
                  data-x="30"
                  data-y="center"
                  data-voffset="22"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:50px;opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style={{
                    zIndex: 6,
                    whiteSpace: "nowrap",
                    fontSize: "18px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgba(134, 136, 148, 1.00)",
                    fontFamily: "Poppins",
                  }}
                >
                  There are many variations of passages of Lorem <br /> Ipsum
                  available.{" "}
                </p>

                <div
                  className="tp-caption rev-btn button button-sm rev-withicon  tp-resizeme rs-hover-ready"
                  id="slide-2-layer-4"
                  data-x="29"
                  data-y="480"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-transform_idle="o:1;"
                  data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;"
                  data-style_hover="c:rgba(255, 255, 255, 1.00);bg:rgba(124, 96, 213, 1.00);"
                  data-transform_in="x:50px;opacity:0;s:1000;e:Power4.easeOut;"
                  data-transform_out="opacity:0;s:300;e:Back.easeIn;"
                  data-start="500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style={{
                    zIndex: 7,
                    whiteSpace: "nowrap",
                    fontSize: "18px",
                    lineHeight: "50px",
                    height: "auto",
                    fontWeight: 300,
                    color: "rgba(255, 255, 255, 1.00)",
                    fontFamily: "Nunito",
                    padding: "0px 35px 0px 35px",
                    borderColor: "rgba(0, 0, 0, 1.00)",
                    borderRadius: "30px 30px 30px 30px",
                    outline: "none",
                    boxShadow: "none",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  Start a Project{" "}
                </div>

                <span
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-13"
                  data-x="31"
                  data-y="538"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:50px;opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="500"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style={{
                    zIndex: 8,
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    lineHeight: "32px",
                    fontWeight: 400,
                    color: "rgba(134, 136, 148, 1.00)",
                    fontFamily: "Poppins",
                  }}
                >
                  *Start Your Project With Us Today!{" "}
                </span>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-5"
                  data-x="727"
                  data-y="166"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1000;e:Power4.easeOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="1020"
                  data-responsive_offset="on"
                  style={{ zIndex: 9 }}
                >
                  <img
                    src={Second}
                    alt=""
                    data-ww="636px"
                    data-hh="411px"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-7"
                  data-x="895"
                  data-y="238"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1000;e:Power4.easeOut;"
                  data-transform_out="opacity:0;s:300;e:Back.easeIn;"
                  data-start="1350"
                  data-responsive_offset="on"
                  style={{ zIndex: 10 }}
                >
                  <img
                    src={Third}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-8"
                  data-x="1045"
                  data-y="235"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1000;e:Power4.easeOut;"
                  data-transform_out="opacity:0;s:300;e:Back.easeIn;"
                  data-start="1360"
                  data-responsive_offset="on"
                  style={{ zIndex: 11 }}
                >
                  <img
                    src={Fourth}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-9"
                  data-x="1196"
                  data-y="231"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:1000;e:Power4.easeOut;"
                  data-transform_out="opacity:0;s:300;e:Back.easeIn;"
                  data-start="1390"
                  data-responsive_offset="on"
                  style={{ zIndex: 12 }}
                >
                  <img
                    src={Fifth}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-17"
                  data-x="858"
                  data-y="330"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="2620"
                  data-responsive_offset="on"
                  style={{ zIndex: 13 }}
                >
                  <img
                    src={Sixth}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-15"
                  data-x="798"
                  data-y="491"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1000;e:Power4.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="1880"
                  data-responsive_offset="on"
                  style={{ zIndex: 14 }}
                >
                  <img
                    src={Seventh}
                    alt=""
                    data-ww="537px"
                    data-hh="250px"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-16"
                  data-x="1128"
                  data-y="353"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:50px;opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="2360"
                  data-responsive_offset="on"
                  style={{ zIndex: 15 }}
                >
                  <img
                    src={Eight}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>

                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-2-layer-18"
                  data-x="764"
                  data-y="342"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:300;"
                  data-start="2750"
                  data-responsive_offset="on"
                  style={{ zIndex: 16 }}
                >
                  <img
                    src={Ninth}
                    alt=""
                    data-ww="auto"
                    data-hh="auto"
                    data-no-retina
                  />{" "}
                </div>
              </li>
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            ></div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
