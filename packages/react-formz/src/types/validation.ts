import { LiteralUnion } from "./utils";

export type ValidationType = LiteralUnion<"required" | "min" | "max" | "pattern" | "custom">;