import Tracker from "@openreplay/tracker";
import { env } from "process";

export const tracker = new Tracker({
  projectKey: env.NEXT_PUBLIC_OPEN_REPLAY_PROJECT_KEY,
  __DISABLE_SECURE_MODE: true,
});