
export type App = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  imageUrl: string;
  dataAiHint: string;
};

export const apps: App[] = [
  {
    id: "layermaster-pro",
    title: "LayerMaster Pro",
    description: "Automate layer management and ensure compliance with company standards with one click.",
    longDescription: "A comprehensive tool to automate layer management, enforce drawing standards, and reduce errors. Perfect for teams that need to maintain consistency across all their projects.",
    price: "₹2499",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "abstract lines",
  },
  {
    id: "blockbuilder-suite",
    title: "BlockBuilder Suite",
    description: "Quickly create and manage dynamic blocks with an intuitive interface.",
    longDescription: "The BlockBuilder Suite provides an intuitive interface for creating, managing, and inserting dynamic blocks, significantly speeding up the drafting process for complex designs.",
    price: "₹3999",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "geometric shapes",
  },
  {
    id: "plotperfect",
    title: "PlotPerfect",
    description: "Streamline your plotting and batch printing processes, saving hours of manual work.",
    longDescription: "Say goodbye to tedious manual printing. PlotPerfect streamlines your plotting and batch printing processes, allowing you to print hundreds of drawings to your exact specifications with just a few clicks.",
    price: "₹1999",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "technical blueprint",
  },
];
