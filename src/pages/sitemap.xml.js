import { projects } from "../data/projects.js";
import { services } from "../data/services.js";

const site = "https://www.sector0studio.com";
const updated = "2026-11-24";
const routes = [
  { path: "/", lastmod: updated },
  { path: "/work/", lastmod: "2026-09-01" },
  { path: "/studio/", lastmod: "2026-09-01" },
  { path: "/services/", lastmod: updated },
  { path: "/ro/servicii/", lastmod: updated },
  { path: "/contact/", lastmod: updated },
  ...projects.map(({ slug }) => ({ path: `/projects/${slug}/`, lastmod: updated })),
  ...services.map(({ slug }) => ({ path: `/${slug}/`, lastmod: updated })),
];

export function GET() {
  const urls = routes.map(({ path, lastmod }) => {
    const alternates = ["/services/", "/ro/servicii/"].includes(path)
      ? `<xhtml:link rel="alternate" hreflang="en" href="${site}/services/" />
         <xhtml:link rel="alternate" hreflang="ro" href="${site}/ro/servicii/" />
         <xhtml:link rel="alternate" hreflang="x-default" href="${site}/services/" />`
      : "";
    return `<url><loc>${site}${path}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`;
  }).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
