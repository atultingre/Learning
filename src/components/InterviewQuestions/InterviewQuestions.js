import React from "react";
import FetchProducts from "./FetchProducts";
import DataGrid from "./DataGrid";

const InterviewQuestions = () => {
  return (
    <div>
      <FetchProducts />
      {/* <hr /> */}
      <DataGrid />
    </div>
  );
};

export default InterviewQuestions;
