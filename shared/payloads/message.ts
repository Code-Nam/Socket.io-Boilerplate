import { z } from "zod";

export const payloadMessageSchema = z.object({
    message: z
        .string()
        .min(1, "Message cannot be empty")
        .max(500, "Message cannot exceed 500 characters"),
});

export type PayloadMessage = z.infer<typeof payloadMessageSchema>;
