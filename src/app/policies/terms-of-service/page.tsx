
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              <h1>Terms of Service</h1>
               <p className="lead text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                Please read these Terms of Service ("Terms") carefully before using the ParkCalc Consultants website (the "Service") operated by us. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
              
              <h2>1. Intellectual Property</h2>
              <p>The Service and its original content, features, functionality, and software products (including but not limited to AutoCAD applications and custom calculators) are and will remain the exclusive property of ParkCalc Consultants. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ParkCalc Consultants.</p>

              <h2>2. Use of Our Website</h2>
              <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by us. We reserve the right to refuse service to anyone for any reason at any time.</p>

              <h2>3. Disclaimer of Warranties; Limitation of Liability</h2>
              <p>Our services and software products are provided 'as is'. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. In no case shall ParkCalc Consultants, our directors, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, arising from your use of the service or any products procured using the service.</p>

              <h2>4. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
              
              <h2>5. Changes</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>

              <h2>6. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at: <a href="mailto:pratik.sawant.work.2906@gmail.com">pratik.sawant.work.2906@gmail.com</a></p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
