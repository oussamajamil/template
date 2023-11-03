import { z } from "zod";

export const themes = ["light", "dark"] as const;

export const themeSchema = z.enum(themes).default("light");

export type ThemeType = z.infer<typeof themeSchema>;

export const booleanSchema = z.boolean().default(false);
