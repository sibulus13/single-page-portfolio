"use client";
import { useEffect } from "react";
import Tracker from "@openreplay/tracker";
import { env } from "process";

const tracker = new Tracker({
  projectKey: env.OPEN_REPLAY_PROJECT_KEY,
});

const Openreplay = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tracker.start();
    }
  }, []);

  return null;
};

export default Openreplay;
