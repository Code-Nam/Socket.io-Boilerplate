//! Input events into ./README.md
import { PayloadMessage } from "shared/payloads/message";
import type { ResponseCallback } from "../response/callback";

export type ClientsToServerEvents = {
    "message": (payload: PayloadMessage, callback: ResponseCallback<null>) => void;
    "message:ping": (payload: PayloadMessage, callback: ResponseCallback<string>) => void;
};