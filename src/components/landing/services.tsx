
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, DraftingCompass, ParkingCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <ParkingCircle className="h-10 w-10 text-accent" />,
    title: "Parking Systems",
    description: "Expert design and implementation of efficient, state-of-the-art parking management and guidance systems for urban and commercial spaces.",
    href: "mailto:pratik.sawant.work.2906@gmail.com"
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: "Customized Software Development",
    description: "Bespoke software solutions that streamline complex business processes, boost productivity, and provide actionable data for your operations.",
    href: "/software"
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-accent" />,
    title: "AutoCAD Custom Applications",
    description: "Tailored AutoCAD plugins and applications to automate design tasks, enforce standards, and accelerate your engineering workflows.",
    href: "/autocad-apps"
  }
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Our Expertise</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide specialized consulting services to solve your unique challenges.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="block">
                <Card className="flex flex-col items-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full text-center">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline mt-4 text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
