import type { MetadataRoute } from "next";

const BASE_URL = "https://cogerphere.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cogerphere – AI Research Lab & Intelligent Systems",
    short_name: "Cogerphere",
    description:
      "Cogerphere is an AI research lab building intelligent systems and Web3 applications. AI research, AI safety, and human-aligned innovation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/cogerpherelogoonly.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "technology"],
  };
}
