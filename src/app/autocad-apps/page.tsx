
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "pdf-extractor",
    title: "Say Goodbye to Manual PDF Creation: Introducing PDF Extractor for AutoCAD",
    description: "Discover how a lightweight, LISP-based tool can automate the entire PDF generation process from your DWG files.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "robot arm drawing",
    href: "/autocad-apps/pdf-extractor",
  },
  {
    id: "floormark-pro",
    title: "Introducing FloorMark Pro for AutoCAD",
    description: "An innovative new companion designed to streamline your workflow and eliminate tedious manual FFL marking tasks.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "blueprint lines measurement",
    href: "/autocad-apps/floormark-pro",
  },
  {
    id: "optipallet",
    title: "Launching OptiPallet – The Ultimate Efficiency Booster!",
    description: "A game-changing application designed to enhance efficiency and boost productivity by 30-40% in pallet inner value calculations.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "glowing geometric shapes",
    href: "/autocad-apps/optipallet",
  },
];

export default function AutocadAppsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                AutoCAD Insights & Applications
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Explore articles, tutorials, and case studies on our custom AutoCAD solutions.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={post.href} className="block group cursor-pointer">
                  <Card className="overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 h-full flex flex-col text-left">
                    <div className="relative w-full h-48">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill={true}
                        className="object-cover"
                        data-ai-hint={post.dataAiHint}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription className="pt-2">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <p className="text-sm font-semibold text-accent hover:text-accent/90">
                            Read More &rarr;
                        </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
