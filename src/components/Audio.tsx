"use client";
import React, { useState, useEffect } from "react";

const Audio: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newAudio = new Audio("/time-ticking.mp3");
    if (audio) {
      // Start playing the audio when the component mounts
      audio.play();

      // Clean up the audio when the component unmounts
      return () => audio.pause();
    }
  }, [audio]);

  return <></>;
};

export default Audio;
