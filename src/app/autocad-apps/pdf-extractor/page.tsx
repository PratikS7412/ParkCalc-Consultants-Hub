
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PdfExtractorPage() {
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
                Say Goodbye to Manual PDF Creation in AutoCAD: Introducing PDF Extractor for AutoCAD
              </h1>
              <p className="lead text-muted-foreground">
                If you’ve ever worked with AutoCAD, you already know the pain of creating PDFs manually — dragging selection windows, fixing orientations, choosing pen styles, and then doing it all over again for every single drawing.
              </p>
              <p>
                It’s time to break free from the repetitive chaos. Meet PDF Extractor for AutoCAD — a lightweight, standalone LISP-based tool that automates the entire PDF generation process from your DWG files.
              </p>
              <h2>Why This Tool Was Built</h2>
              <p>
                Whether you're a solo drafter, a small team, or a large engineering firm, the traditional method of plotting sheets to PDF in AutoCAD is tedious, time-consuming, and error-prone. What if you could eliminate all that hassle with a single click? That’s exactly what PDF Extractor does.
              </p>
              <h2>Key Features at a Glance</h2>
              <ul>
                <li><strong>Select Your Sheet Block – Done!</strong> Just pick your layout or sheet block, and the tool takes over from there.</li>
                <li><strong>Automatic Page Orientation:</strong> No need to rotate or fix manually – the tool smartly detects whether your sheet is landscape or portrait and adjusts accordingly.</li>
                <li><strong>Choose Between Black & White or Screening:</strong> Whether you need clean line drawings or shaded presentations, you’ve got options.</li>
                <li><strong>Direct Save to DWG Folder:</strong> No hunting through folders – your PDFs are saved right where your DWG file lives.</li>
                <li><strong>Flexible Naming Options:</strong> Supports both sequential (like Sheet-01, Sheet-02...) and custom naming for better organization.</li>
                <li><strong>No External Software Needed:</strong> This is a fully independent LISP routine. No dependency on third-party plotters or print drivers.</li>
                <li><strong>One-Time Setup = Long-Term Time Savings:</strong> Once installed, it’s just click and go – for every project going forward.</li>
              </ul>
              <h2>Ideal for Teams and Professionals</h2>
              <p>
                Whether you're creating drawing sets for client submissions, archiving sheets, preparing internal reviews, or generating design documents weekly...this tool saves hours every week – especially for teams working on multiple projects.
              </p>
              <h3>One-Time Purchase – Lifetime Access</h3>
              <p className="text-3xl font-bold text-primary">Just 5000 INR. No subscriptions. No hidden fees.</p>
              <ul className="list-none pl-0">
                  <li>✅ Yes, you can share it across your entire team.</li>
                  <li>✅ No license keys. No limits.</li>
              </ul>
              <h2>Real Productivity Gains</h2>
              <p>
                Engineers and architects using PDF Extractor have reported up to 80% time savings on drawing set exports. It removes the bottlenecks and lets your team focus on design – not document management.
              </p>
              <h2>Ready to Automate Your PDF Workflow?</h2>
              <p>
                This isn’t just a tool – it’s a productivity hack your entire CAD team will thank you for. DM me to grab your copy today and start saving hours every week.
              </p>
               <h2>Questions or Custom Needs?</h2>
              <p>
                If you need help setting it up, want to add a custom naming format, or integrate it into your company template – just reach out! Support is always just a message away.
              </p>
              <div className="mt-8 not-prose">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="mailto:pratik.sawant.work.2906@gmail.com">
                       DM to Grab Your Copy
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
