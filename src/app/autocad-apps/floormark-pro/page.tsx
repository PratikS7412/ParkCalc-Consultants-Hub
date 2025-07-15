
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FloorMarkProPage() {
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
                Introducing FloorMark Pro
              </h1>
              <p className="lead text-muted-foreground">
                Our innovative new AutoCAD companion designed to streamline your workflow and eliminate tedious manual tasks!
              </p>
              <h2>Key Features</h2>
              <ul>
                <li><strong>Automatic FFL Marking:</strong> Inserts Mtext as Finished Floor Level (FFL) marking text with built-in distance calculations.</li>
                <li><strong>Multiple Dimension Selection:</strong> Easily select multiple dimensions for seamless integration.</li>
                <li><strong>Flexible Calculation Options:</strong> Choose between addition or subtraction as per your project needs.</li>
                <li><strong>Customizable Symbols:</strong> Decide whether to use +, -, or ± based on your preferences.</li>
                <li><strong>Intuitive Text Placement:</strong> Guides you through the placement of text for optimal clarity.</li>
              </ul>
              <p>
                FloorMark Pro minimizes manual typing and calculation errors, making it an essential tool for civil structures and various other industries where precision is key.
              </p>
              <p>
                Experience the efficiency boost and say goodbye to repetitive, error-prone tasks. Embrace a smarter way to work with FloorMark Pro!
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
