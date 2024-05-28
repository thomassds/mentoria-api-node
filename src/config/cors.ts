import { CorsOptions } from "cors";

export const getCorsConfig = (): CorsOptions => ({
    origin: "*",
    exposedHeaders: ["content-type", "content-length"],
    maxAge: 600,
    methods: ["GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS"],
    allowedHeaders: ["Accept", "Content-Type", "Authorization", "x-api-key"],
});
