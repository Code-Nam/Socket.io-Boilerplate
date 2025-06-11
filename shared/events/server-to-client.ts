//! Input events into ./README.md

import { PayloadMessage } from "shared/payloads/message";

export type ServerToClientEvents = {
  "hello": (payload: PayloadMessage) => void;
}
