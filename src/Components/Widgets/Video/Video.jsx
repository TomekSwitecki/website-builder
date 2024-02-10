import React, { useEffect, useState } from "react";

function Video({ props }) {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    console.log(props.file)
    if (props.file) {
      const videoURL = URL.createObjectURL(props.file);
      setVideoUrl(videoURL);
    }
    else {
      setVideoUrl(null);
    }
  }, [props.file]);

  // useEffect(() => {
  //   if (!props.url.value) {

  //   }
  // }, [props.url.value]);

  const sourceUrl = videoUrl || (props.url.value ? props.url.value : null);

  if (sourceUrl) {
    return (
      <video
        key={sourceUrl}
        className="video"
        controls={props.controls}
        autoPlay={props.autoPlay}
        loop={props.loop}
      >
        <source src={sourceUrl} type="video/mp4"></source>
      </video>
    );
  }

}

export default Video;
