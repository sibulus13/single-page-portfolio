"use client";
import { useEffect } from "react";
import { env } from "process";
import { tracker } from "@/OpenReplay/OpenReplay";

const Openreplay = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tracker.start();
    }
  }, []);

  return null;
};

export default Openreplay;
