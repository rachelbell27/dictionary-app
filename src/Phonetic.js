import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div>
      <div>{props.phonetic.text}</div>
      <div>
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    </div>
  );
}
