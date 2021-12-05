import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.data);
  if (props.data != null) {
    return (
      <div>
        <section>
          <h2>
            <div>{props.data.word} </div>
            {props.data.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetic phonetic={phonetic} />
                </span>
              );
            })}
          </h2>
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
