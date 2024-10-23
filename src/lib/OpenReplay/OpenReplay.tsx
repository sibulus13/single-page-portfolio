import Tracker from "@openreplay/tracker";

export const tracker = new Tracker({
  projectKey: process.env.NEXT_PUBLIC_OPEN_REPLAY_PROJECT_KEY,
  __DISABLE_SECURE_MODE: true,
});