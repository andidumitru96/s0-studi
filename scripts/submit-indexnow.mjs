import { readFile } from "node:fs/promises";

// Run after the new source is deployed: npm run seo:notify
// This proof file is public by design; it is not a Cloudflare or Bing account token.
const site = "https://www.sector0studio.com";
const key = (await readFile(new URL("../public/indexnow-key.txt", import.meta.url), "utf8")).trim();
if (!/^[a-f0-9]{32}$/.test(key)) throw new Error("Invalid IndexNow proof key.");

const liveProof = await fetch(`${site}/indexnow-key.txt`, { signal: AbortSignal.timeout(20000) });
if (!liveProof.ok || (await liveProof.text()).trim() !== key) {
  throw new Error("The IndexNow proof file is not live yet; deploy before notifying search engines.");
}

const sitemapResponse = await fetch(`${site}/sitemap.xml`, { signal: AbortSignal.timeout(20000) });
if (!sitemapResponse.ok) throw new Error("The live sitemap is unavailable.");
const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length < 16 || urlList.some((url) => new URL(url).origin !== site)) {
  throw new Error("The new sitemap is not live or contains an unexpected host.");
}

// Notify the old URLs as well, so crawlers can discover their permanent redirects.
for (let index = 1; index <= 6; index++) urlList.push(`${site}/projects/project-0${index}/`);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).hostname, key, keyLocation: `${site}/indexnow-key.txt`, urlList }),
  signal: AbortSignal.timeout(30000),
});
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow did not accept the submission (HTTP ${response.status}).`);
}
console.log(`IndexNow received ${urlList.length} URLs (HTTP ${response.status}). ${response.status === 202 ? "Key validation is pending." : "Submission accepted."} This is not a guarantee of indexing or rankings.`);
