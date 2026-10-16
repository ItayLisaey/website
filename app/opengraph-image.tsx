import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Satori cannot resolve next/font, so the Ubuntu files are read from disk. */
const fontDir = join(process.cwd(), "app", "fonts");

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(fontDir, "ubuntu-regular.ttf")),
    readFile(join(fontDir, "ubuntu-bold.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "80px",
        fontFamily: "Ubuntu",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#111111",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#3b21b2" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#8a8a8a" }}>
          {siteConfig.location}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 28, color: "#8a8a8a" }}>
        itay.lisaey.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Ubuntu", data: regular, weight: 400, style: "normal" },
        { name: "Ubuntu", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
