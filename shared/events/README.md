# Socket Events

This folder is for the events communicated between the Client and the Server

## server-to-client

### hello

Emits message to all user

```ts
  // Input
  string
```

## client-to-server

### message

Display message emited by client to server

```ts
  // Callback
  null
```

### message:ping

Sends a message back to client

```ts
  // Callback
  string
```
