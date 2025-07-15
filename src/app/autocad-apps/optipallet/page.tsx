
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OptiPalletPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link href="/autocad-apps">
                  <ArrowLeft className="mr-2" />
                  Back to Articles
                </Link>
              </Button>
            </div>
            <article className="prose prose-lg max-w-none text-foreground dark:prose-invert prose-headings:text-primary prose-headings:font-headline prose-a:text-accent hover:prose-a:text-accent/90 prose-strong:text-primary/90 text-left">
              <h1>
                Exciting News: Launching OptiPallet – The Ultimate Efficiency Booster!
              </h1>
              <p className="lead text-muted-foreground">
                We are thrilled to introduce OptiPallet, a game-changing application designed to enhance efficiency and boost productivity by 30-40% in pallet inner value calculations.
              </p>
              
              <h2>What does OptiPallet do?</h2>
              <p>
                Our new application simplifies and streamlines complex calculations for multiple parking systems, including:
              </p>
              <ul>
                 <li>ETP (Electromechanical Twin Parking)</li>
                 <li>Overground Puzzle Parkings</li>
                 <li>Pit Puzzle Parkings</li>
                 <li>Dependent Stacks (OG & Pit Type)</li>
              </ul>

              <h2>Key Features & Benefits:</h2>
               <ul>
                 <li><strong>Custom Commands:</strong> Tailored for different parking systems</li>
                 <li><strong>Instant Alerts:</strong> Get real-time width availability based on measured dimensions</li>
                 <li><strong>Optimized Space Utilization:</strong> Identify the best pallet inner values with remainder calculations</li>
                 <li><strong>Seamless Workflow:</strong> Reduce window switching and save valuable time</li>
                 <li><strong>Sales Enablement:</strong> Equip sales teams with precise, optimized values for better client presentations</li>
              </ul>

              <p>
                With OptiPallet, you can maximize efficiency, minimize errors, and make data-driven decisions faster than ever!
              </p>
              
              <div className="mt-8 not-prose">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="mailto:pratik.sawant.work.2906@gmail.com">
                       Request a Demo or Purchase
                    </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
