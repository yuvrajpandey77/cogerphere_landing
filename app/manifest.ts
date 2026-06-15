import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cogerphere – AI Research Lab & Intelligent Systems",
    short_name: "Cogerphere",
    description:
      "Cogerphere builds Openbentt, Cobentt, RRbench, Meridian local research AI, CIF, and Clox — intelligent systems that stay coherent and human-aligned.",
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
