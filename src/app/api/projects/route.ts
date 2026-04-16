import { NextResponse } from "next/server";

type VercelProject = {
  id: string;
  name: string;
  latestDeployments?: { url?: string; state?: string; readyState?: string }[];
  link?: { repo?: string };
};

export async function GET() {
  const tokenCandidates = [
    process.env.VERCEL_TOKEN,
    process.env.VERCEL_ACCESS_TOKEN,
    process.env.TOKEN_VERCEL,
    process.env.VERCEL__TOKEN,
  ];
  const token = tokenCandidates.find((item) => Boolean(item));
  const apiBase = process.env.VERCEL_API_BASE_URL ?? "https://api.vercel.com";

  if (!token) {
    return NextResponse.json(
      {
        error:
          "Missing Vercel token. Please set one of: VERCEL_TOKEN, VERCEL_ACCESS_TOKEN, TOKEN_VERCEL, or VERCEL__TOKEN.",
      },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${apiBase}/v9/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Vercel API failed with status ${response.status}.` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as { projects: VercelProject[] };

    const projects = (data.projects ?? [])
      .map((project) => {
        const latestDeployment = project.latestDeployments?.[0];
        const deploymentUrl = latestDeployment?.url
          ? `https://${latestDeployment.url}`
          : null;

        return {
          id: project.id,
          name: project.name,
          url: deploymentUrl,
          status: latestDeployment?.readyState ?? latestDeployment?.state ?? "unknown",
          repo: project.link?.repo ?? null,
          previewImage: deploymentUrl
            ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
                deploymentUrl,
              )}?w=1200`
            : null,
        };
      })
      .filter((project) => project.status.toUpperCase() === "READY" && Boolean(project.url));

    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch projects from Vercel." },
      { status: 500 },
    );
  }
}
