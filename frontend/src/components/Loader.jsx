import React from "react";

import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-50 mx-auto text-center">
      <BarLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
