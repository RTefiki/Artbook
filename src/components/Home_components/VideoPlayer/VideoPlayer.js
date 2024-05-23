import React, { useRef, useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa";
import {
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
  IoPauseSharp,
} from "react-icons/io5";
import { CgPlayTrackNextR } from "react-icons/cg";
import "./videoPlayer.css";
import { LuMonitorPause } from "react-icons/lu";
import { IoIosPlay } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoPlayer({videoURL}) {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState();
  const [volume, setVolume] = useState(0);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!isMuted) {
      setVolume(0);
      video.volume = 0;
      setIsMuted(true);
    } else {
      const newVolume = 50;
      setVolume(newVolume);
      video.volume = newVolume / 100;
      setIsMuted(false);
    }
  };

  const progressVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume / 100;
    setIsMuted(newVolume == "0");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const initialVolume = 50;
      video.volume = initialVolume / 100;
      setVolume(initialVolume);
      setIsMuted(false);
      setIsMuted(video.muted);
    }
  }, []);

  const handleProgress = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    const setVideoDuration = () => setDuration(video.duration);

    video.addEventListener("loadedmetadata", setVideoDuration);
    video.addEventListener("timeupdate", handleProgress);

    return () => {
      video.removeEventListener("loadedmetadata", setVideoDuration);
      video.removeEventListener("timeupdate", handleProgress);
    };
  }, []);

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current.parentNode;
    if (!document.fullscreenElement) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen().then(() => {
          setIsFullscreen(true);
          videoContainer.onmousemove = () => {
            setShowControls(true);
            clearTimeout(hideControlsTimeout);
            hideControlsTimeout = setTimeout(() => {
              setShowControls(false);
            }, 2000);
          };
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
          videoContainer.onmousemove = null;
        });
      }
    }
  };

  let hideControlsTimeout;

  const handleMouseOver = () => {
    clearTimeout(hideControlsTimeout);
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    hideControlsTimeout = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(hideControlsTimeout);
  }, []);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  return (
    <div
      className="video-player"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef}>
       <source src={videoURL} type="video/mp4" />
      </video>
      {showControls && (
        <>
          <div onClick={togglePlayPause} className="player">
            {isPlaying ? (
              <LuMonitorPause size={50} />
            ) : (
              <FaRegCirclePlay size={50} />
            )}
          </div>
          <div className="controls">
            <div className="timer_progressbar">
              <p>{formatTime(currentTime)}</p>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => {
                  const video = videoRef.current;
                  const newTime = (video.duration / 100) * e.target.value;
                  video.currentTime = newTime;
                }}
                className="progress-bar"
              />
              <p>{formatTime(duration)}</p>
            </div>

            <div className="but_controls">
              <div className="play_next_voice">
                <button onClick={togglePlayPause} className="play-pause-btn">
                  {!isPlaying ? (
                    <IoIosPlay size={22} />
                  ) : (
                    <IoPauseSharp size={22} />
                  )}
                </button>
                <button className="next_video">
                  <CgPlayTrackNextR size={22} />
                </button>
                <button className="volume-btn" onClick={toggleMute}>
                  {isMuted ? (
                    <IoVolumeMuteOutline size={22} />
                  ) : (
                    <IoVolumeHighOutline size={22} />
                  )}
                </button>
                <div className="volumeContainer">
                  <input
                    className="volume"
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={progressVolume}
                  />
                  <span
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isMuted ? <span>Mute</span> : volume}
                  </span>
                </div>
              </div>
              <button onClick={toggleFullscreen} className="fullscreen-btn">
                <FaExpand size={22} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
