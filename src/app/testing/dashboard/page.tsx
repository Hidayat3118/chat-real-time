'use client';
import Sidebar from "./component/disebar";
import Main from "./component/main";
import React from "react";

const dashboard = () => {
  return (
    <div className="ml-32 mt-32">
      <Sidebar />
      <Main />
    </div>
  );
};

export default dashboard;
