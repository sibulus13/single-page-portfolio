// X/Twitter card uses the same generated image as Open Graph (one source of truth for the preview).
// Segment config (runtime) must be declared literally here; Next.js cannot read it through a re-export.
export const runtime = "edge";
export { default, alt, size, contentType } from "./opengraph-image";
