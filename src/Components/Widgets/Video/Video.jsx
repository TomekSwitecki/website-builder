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

  if (!videoUrl && props.url.value) {
    return <video key={videoUrl} className="video" controls={props.controls} autoPlay={props.autoPlay} loop={props.loop}>
      <source src={props.url.value} type="video/mp4"></source>
    </video>;
  }

  return (
    <video key={videoUrl} className="video" controls={props.controls} autoPlay={props.autoPlay} loop={props.loop}>
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  );

}

export default Video;
