/** Turn a post title into a clean, URL-safe slug (e.g. "Just the tip of Oregon" → "just-the-tip-of-oregon"). */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['’"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
