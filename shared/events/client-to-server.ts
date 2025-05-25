//! Input events into ./README.md
import type { ResponseCallback } from "../response/callback";

export type ClintsToServerEvents = {
  message: (payload: string, callback: ResponseCallback<null>) => void;
  "message:ping": (payload: string, callback: ResponseCallback<string>) => void;
};
