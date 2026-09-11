import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#060810",
        color: "#4d8dff",
        fontSize: "16px",
        fontWeight: 700,
        borderRadius: "7px",
        fontFamily: "sans-serif",
      }}
    >
      {site.initials}
    </div>,
    size,
  );
}
