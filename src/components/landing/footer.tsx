"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="footer" className="w-full bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Get in Touch
        </h2>
        <p className="mt-4 text-primary-foreground/80 md:text-lg/relaxed">
          Have a project in mind? Let's talk.
        </p>
        <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="mailto:pratik.sawant.work.2906@gmail.com?subject=Project%20Enquiry">Contact Us via Email</a>
            </Button>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-primary-foreground/60">
                <Link href="/policies/privacy-policy" className="transition-colors hover:text-accent">Privacy Policy</Link>
                <Link href="/policies/terms-of-service" className="transition-colors hover:text-accent">Terms of Service</Link>
                <Link href="/policies/refund-policy" className="transition-colors hover:text-accent">Refund Policy</Link>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">&copy; {year} ParkCalc Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
