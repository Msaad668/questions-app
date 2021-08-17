import React, { useContext } from "react";
import { GlobalContext } from "../store";

const Result = () => {
  const { result } = useContext(GlobalContext);

  return <div>{result}</div>;
};

export default Result;
