# Socket.io Boilerplate Client ⚡️

A boilerplate for real-time applications using Socket.io with TypeScript, designed for easy integration with your favorite frontend framework via Vite. 🚀

## Features ✨

- Type-safe Socket.io events using TypeScript
- Shared types between client and server
- Response handling with success/failure patterns
- Environment configuration
- Organized project structure

## Client Setup 💻

1. Install dependencies:

    ```bash
    npm install
    ```

2. Create a `.env` file in the src directory:

    ```bash
    cp src/.env.example src/.env
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Integrating with Frontend Frameworks 🧩

This client uses [Vite](https://vitejs.dev/) for lightning-fast development and easy framework integration.

### Adding React ⚛️

1. Install React and related dependencies:

    ```bash
    npm install react react-dom
    npm install -D @types/react @types/react-dom @vitejs/plugin-react
    ```

2. Update `vite.config.ts` to use the React plugin:

    ```typescript
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                shared: "../shared",
            },
        },
    });
    ```

3. Create your React entry point (e.g., `src/App.tsx`) and update `src/main.ts` to render your app:

  ```tsx
  // src/App.tsx
  import React from "react";

  const App: React.FC = () => {
    return <h1>Hello, Socket.io Boilerplate!</h1>;
  };

  export default App;
  ```

  ```tsx
  // src/main.ts
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
  );
  ```

### Adding Vue 🟩

1. Install Vue and related dependencies:

    ```bash
    npm install vue
    npm install -D @vitejs/plugin-vue
    ```

2. Update `vite.config.ts` to use the Vue plugin:

    ```typescript
    import { defineConfig } from "vite";
    import vue from "@vitejs/plugin-vue";

    export default defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                shared: "../shared",
            },
        },
    });
    ```

3. Create your Vue components (e.g., `src/App.vue`) and update your entry point (typically `src/main.ts`) to mount the Vue app:

      ```vue
      <!-- src/App.vue -->
      <template>
        <h1>Hello, Socket.io Boilerplate!</h1>
      </template>

      <script setup lang="ts">
      // Add your component logic here
      </script>

      <style scoped>
      /* Add your styles here */
      </style>
      ```

  ```typescript
  // src/main.ts
  import { createApp } from "vue";
  import App from "./App.vue";

  createApp(App).mount("#app");
  ```

## Development 🧑‍💻

- Run client: `npm run dev`
- Format code: `npm run format`
