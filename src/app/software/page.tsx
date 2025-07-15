
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Calculator } from "lucide-react";
import Link from "next/link";

const softwareProducts = [
  {
    icon: <AppWindow className="h-10 w-10 text-accent" />,
    title: "PSO DMS",
    description: "A comprehensive Document Management System designed to streamline document workflows, enhance security, and improve accessibility.",
    href: "/software/pso-dms"
  },
  {
    icon: <Calculator className="h-10 w-10 text-accent" />,
    title: "ParkCalc Pro Application",
    description: "An advanced calculation tool for parking systems, providing precise analytics and reporting to optimize your parking infrastructure.",
    href: "https://studio--parkcalc-pro.us-central1.hosted.app"
  }
];

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="software" className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Our Software Solutions</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our custom-built applications designed to meet your specific needs.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
              {softwareProducts.map((product, index) => (
                <Link key={index} href={product.href} className="block" target={product.href.startsWith('http') ? '_blank' : '_self'} rel={product.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                    <Card className="flex flex-col text-center items-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardHeader className="items-center">
                        <div className="bg-primary/10 p-4 rounded-full">
                          {product.icon}
                        </div>
                        <CardTitle className="font-headline mt-4 text-2xl">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{product.description}</p>
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
