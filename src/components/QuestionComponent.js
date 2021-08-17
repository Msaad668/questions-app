import React, { useState } from "react";
import QuestionOption from "./QuestionOption";

const QuestionComponent = (props) => {
  const { QuestionText, Correct, QuestionID, QuestionOptions } = props.question;
  return (
    <div className="question-wrap">
      <div className="question-title">{QuestionText}</div>
      <div className="question-options">
        {QuestionOptions.map((option) => {
          return <QuestionOption option={option} correct={Correct} />;
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;
