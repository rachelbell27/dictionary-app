import React, { useState } from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.data);
  if (props.data != null) {
    return (
      <div>
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
