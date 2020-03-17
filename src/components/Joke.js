import React from "react";

function Joke(props) {

  return (
    <div>
      <h2 style={ {display: props.question?"block":"none"}}>Question: {props.question}</h2>
      <h3 style={{color:!props.question && "#888858"}}>Answer: {props.answer}</h3>
    </div>
  );
}

export default Joke;
