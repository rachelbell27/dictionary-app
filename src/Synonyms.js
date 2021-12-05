import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms != null) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="btn synonym">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
