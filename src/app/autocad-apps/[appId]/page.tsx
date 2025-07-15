
"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps } from "@/lib/apps-data";
import { ArrowLeft } from "lucide-react";

function getApp(appId: string) {
    return apps.find((a) => a.id === appId);
}

export default function AppDetailPage({ params }: { params: { appId: string } }) {
  const app = getApp(params.appId);

  if (!app) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/autocad-apps/store">
                <ArrowLeft className="mr-2" />
                Back to Store
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={app.imageUrl}
                alt={app.title}
                fill={true}
                className="object-cover"
                data-ai-hint={app.dataAiHint}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                {app.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {app.longDescription || app.description}
              </p>
              <div className="flex items-center space-x-4">
                <p className="text-4xl font-bold text-primary">{app.price}</p>
              </div>
              <div className="flex gap-4">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    <a href="mailto:pratik.sawant.work.2906@gmail.com">Request a Demo or Purchase</a>
                 </Button>
              </div>
               <div className="text-sm text-muted-foreground">
                    <p><strong>Category:</strong> AutoCAD Application</p>
                    <p><strong>Compatibility:</strong> AutoCAD 2018+</p>
              </div>
            </div>
          </div>
           <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Product Details</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>This powerful application is designed to seamlessly integrate with your existing AutoCAD environment, providing you with tools to enhance productivity and streamline your design process. {app.longDescription}</p>
                    <p>Whether you're managing complex layer systems, creating dynamic blocks, or automating plotting tasks, this suite of tools is built to save you time and reduce errors. It's developed with performance and stability in mind, ensuring it can handle even your most demanding projects.</p>
                </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
