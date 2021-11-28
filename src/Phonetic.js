import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <span>
      {props.phonetic.text}

      <ReactAudioPlayer src={props.phonetic.audio} controls />
    </span>
  );
}
