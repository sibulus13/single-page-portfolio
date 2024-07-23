import Tracker from "@openreplay/tracker";
import { env } from "process";

export const tracker = new Tracker({
  projectKey: env.OPEN_REPLAY_PROJECT_KEY,
});
