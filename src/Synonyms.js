import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms != null) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
