import React from "react";

export default function Main(props) {
  const { data } = props;

  return (
    <div className="mediaContainer">
      {data.media_type === "image" ? (
        <img src={data.hdurl} alt={data.title || 'background-image'} className="bgImage" />
      ) : data.media_type === "video" ? (
        <iframe
          src={data.url}
          title={data.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="bgVideo"
        ></iframe>
      ) : (
        <p>Unsupported media type</p>
      )}
    </div>
  );
}
