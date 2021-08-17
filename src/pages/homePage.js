import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");
  let history = useHistory();
  const handleBtnClick = () => {
    history.push("/questions");
  };

  return (
    <div className="home container">
      <div className="wrapper d-flex flex-row">
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={handleBtnClick} color="primary">
          start quiz
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
