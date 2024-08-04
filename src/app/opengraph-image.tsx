import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Roshan Paudel";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const josefFont = fetch(
    new URL(
      "../assets/fonts/JosefinSlab-VariableFont_wght.ttf",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element

      <div
        style={{
          height: "400px",
          width: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: "32px",
          fontWeight: 600,
          border: "1px solid #e0e0e0",
          padding: "20px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div style={{ marginTop: "20px", color: "#333" }}>Roshan Paudel</div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "normal",
            color: "#555",
            marginTop: "10px",
          }}
        >
          Fullstack Developer
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "normal",
            color: "#777",
            marginTop: "20px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.5",
          }}
        >
          Passionate Fullstack web developer and Linux enthusiast with expertise
          in the MERN stack, TypeScript, TypeORM, and PostgreSQL. Dedicated to
          continuous learning and delivering scalable solutions.
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await josefFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
