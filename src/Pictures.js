import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  console.log(props);
  if (props.photos) {
    return (
      <section className="Pictures">
        <div>
          {props.photos.map(function (photo, index) {
            return (
              <div key={index}>
                <img
                  src={photo.src.medium}
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
