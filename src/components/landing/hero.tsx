
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
            Innovative Solutions for Complex Challenges
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            ParkCalc Consultants delivers expert consulting in Parking Systems,
            custom productivity software, and specialized AutoCAD applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <a href="mailto:pratik.sawant.work.2906@gmail.com">Request a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
