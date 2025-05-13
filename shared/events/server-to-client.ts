//! Input events into ./README.md

export type ServerToClientEvents = {
  "hello": (word: string) => void;
}
