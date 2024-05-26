import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // https://github.com/preactjs/signals/issues/509
        // https://github.com/preactjs/signals/blob/main/packages/react/README.md#react-integration
        plugins: [["module:@preact/signals-react-transform"]],
      },
    }),
  ],
});
