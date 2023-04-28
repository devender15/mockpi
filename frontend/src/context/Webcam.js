import React from "react";
import RecordWebCamContext from "./WebcamContext";
import { useRecordWebcam } from "react-record-webcam";

const Webcam = (props) => {
  const recorder = useRecordWebcam({ frameRate: 60 });

  return (
    <RecordWebCamContext.Provider value={recorder}>
      {props.children}
    </RecordWebCamContext.Provider>
  );
};

export default Webcam;
