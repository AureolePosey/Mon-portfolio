import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}, ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#060810",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "16px",
            border: "1px solid rgba(77, 141, 255, 0.35)",
            backgroundColor: "rgba(77, 141, 255, 0.12)",
            color: "#4d8dff",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          {site.initials}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid #1c2540",
            backgroundColor: "#0c1120",
            color: "#94a2c0",
            fontSize: "20px",
          }}
        >
          {site.availabilityBadge}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#e9edf7",
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "24px",
            color: "#4d8dff",
            fontSize: "40px",
            fontWeight: 600,
          }}
        >
          {site.role}
          <span style={{ color: "#94a2c0", margin: "0 16px" }}>/</span>
          <span style={{ color: "#94a2c0", fontSize: "32px" }}>
            {site.secondaryRole}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "56px",
            height: "3px",
            backgroundColor: "#4d8dff",
            marginRight: "20px",
          }}
        />
        <div style={{ color: "#94a2c0", fontSize: "24px" }}>
          {site.stackLine}
        </div>
      </div>
    </div>,
    size,
  );
}
