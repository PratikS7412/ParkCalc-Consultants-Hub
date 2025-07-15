
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
             <div className="mb-8">
                <Button asChild variant="outline">
                    <Link href="/">
                    <ArrowLeft className="mr-2" />
                    Back to Home
                    </Link>
                </Button>
            </div>
            <article className="prose prose-lg max-w-none text-foreground dark:prose-invert prose-headings:text-primary prose-headings:font-headline prose-a:text-accent hover:prose-a:text-accent/90 prose-strong:text-primary/90 text-left">
              <h1>Refund Policy</h1>
               <p className="lead text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                Thank you for choosing ParkCalc Consultants. We are committed to providing high-quality software and consulting services. Please read our refund policy carefully.
              </p>

              <h2>1. Digital Software Products</h2>
              <p>
                Due to the digital nature of our software products (including AutoCAD applications and custom calculators), all sales are final. Once a product has been purchased and delivered, we cannot offer a refund or exchange. We encourage you to request a demo or ask any questions you may have before making a purchase to ensure the product meets your needs.
              </p>

              <h2>2. Consulting Services</h2>
              <p>
                Payments for consulting services are non-refundable once the service has been rendered. For projects with upfront deposits, the deposit is non-refundable as it covers the initial work and allocation of resources.
              </p>
              
              <h2>3. Defective Products or Issues</h2>
              <p>
                If you encounter a technical issue or believe a product is defective, please contact our support team at <a href="mailto:pratik.sawant.work.2906@gmail.com">pratik.sawant.work.2906@gmail.com</a>. We are committed to resolving any issues and will work with you to provide a solution, which may include bug fixes, patches, or technical support. We do not offer refunds for technical issues but will provide dedicated support to ensure the software functions as described.
              </p>

              <h2>4. Contact Us</h2>
              <p>
                If you have any questions about our Refund Policy, please contact us. We are here to help and ensure you are satisfied with our products and services.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
