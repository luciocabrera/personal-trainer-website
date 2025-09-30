import { type Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Pre-render static routes for better performance
  prerender: ["/"],
} satisfies Config;
