import { ImageResponse } from "next/og";
import { projects } from "@/lib/projects";

export const runtime = "edge";

const homeCard = {
  index: "00",
  intro:
    "Full-stack web developer from Rajshahi, Bangladesh. Next.js, TypeScript & PostgreSQL under the hood, micro-interactions on top.",
  tags: ["Next.js", "TypeScript", "PostgreSQL"],
  tint: "#e7e4f9",
  title: "Rifat Sarker Raju",
};

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const project = params.slug === "home" ? homeCard : projects[params.slug];

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f3f2fa",
          color: "#34375c",
          display: "flex",
          height: "100%",
          padding: "58px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: project.tint,
            borderRadius: "36px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px 58px",
            position: "relative",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 21,
              justifyContent: "space-between",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>Raju / Selected work</div>
            <div style={{ color: "#655cf6", display: "flex" }}>
              {params.slug === "home" ? "Portfolio" : `${project.index} / 04`}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 82,
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 1,
              }}
            >
              {project.title}
              <span style={{ color: "#655cf6", marginLeft: 18 }}>✦</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 27,
                lineHeight: 1.4,
                marginTop: 28,
                maxWidth: 940,
              }}
            >
              {project.intro}
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {project.tags.map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(52,55,92,0.14)",
                  borderRadius: 999,
                  display: "flex",
                  fontSize: 18,
                  padding: "10px 18px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
