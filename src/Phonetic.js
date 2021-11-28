import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div>
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <br />
      {props.phonetic.text}
    </div>
  );
}
