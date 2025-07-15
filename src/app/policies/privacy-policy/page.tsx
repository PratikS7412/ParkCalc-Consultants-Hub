
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              <h1>Privacy Policy</h1>
              <p className="lead text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                ParkCalc Consultants ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you visit our website.
              </p>
              
              <h2>1. Information We Collect</h2>
              <p>We do not use cookies or tracking technologies to collect personal data from our visitors. Our website is for informational purposes only. The only personal information we may collect is what you voluntarily provide to us when you contact us via email, such as your name, email address, and the content of your message.</p>
              
              <h2>2. How We Use Your Information</h2>
              <p>Any information you provide to us via email is used solely for the purpose of responding to your inquiries, providing requested information about our services or products, processing orders, and delivering customer support. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

              <h2>3. Data Security</h2>
              <p>We take reasonable measures to protect the information you provide to us. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
              
              <h2>4. Third-Party Links</h2>
              <p>Our website may contain links to other websites. We are not responsible for the privacy practices of these other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

              <h2>5. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

              <h2>6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:pratik.sawant.work.2906@gmail.com">pratik.sawant.work.2906@gmail.com</a></p>

            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
