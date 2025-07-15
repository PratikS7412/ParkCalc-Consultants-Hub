
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { apps } from "@/lib/apps-data";

export default function AutocadStorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                AutoCAD Application Store
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Browse our collection of custom applications designed to boost your productivity.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <Card key={app.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col text-left">
                  <div className="relative w-full h-48">
                    <Image
                      src={app.imageUrl}
                      alt={app.title}
                      fill={true}
                      className="object-cover"
                      data-ai-hint={app.dataAiHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription className="pt-2">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col gap-4">
                    <p className="text-2xl font-bold text-primary">{app.price}</p>
                    <Button asChild className="w-full">
                        <Link href={`/autocad-apps/${app.id}`}>
                            View Details
                        </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
