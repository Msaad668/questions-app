import React, { createContext, useReducer } from "react";
import GlobalReducer from "../reducers/global.reducer";

const initialState = {
  activeQuestion: 0,
  answer1: {},
  result: 0,
};

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function setActiveQuestion(activeQuestion) {
    console.log("in action", activeQuestion);
    dispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: { activeQuestion },
    });
  }

  function setResult(result) {
    dispatch({
      type: "SET_RESULT",
      payload: { result },
    });
  }

  function setAnswer1(answer1) {
    dispatch({
      type: "SET_ANSWER1",
      payload: { answer1 },
    });
  }

  function setLoading(loading) {
    dispatch({
      type: "SET_LOADING",
      payload: { loading },
    });
  }

  function setTotalPrice(totalPrice) {
    dispatch({
      type: "SET_TOTAL_PRICE",
      payload: { totalPrice },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setActiveQuestion,
        setResult,
        setLoading,
        setAnswer1,
        setTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
