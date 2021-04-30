import React, {useRef, useState} from "react"

const MediaPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef()

  const handlePlay = () => {
    const video = videoRef.current;
    video.play();
    setIsPlaying(true);

  }

  const handlePause = () => {
    const video = videoRef.current;
    video.pause();
    setIsPlaying(false);
  }

  const handleReproduction = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <div>
        <video ref={videoRef} onClick={handleReproduction} width="400">
          <source src="video/coding.mp4" type="video/mp4"/>
        </video>
      </div>
      <div>
        <button onClick={handlePlay} disabled={isPlaying}>Play</button>
        <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
      </div>
    </div>
  )
};

export default MediaPlayer;