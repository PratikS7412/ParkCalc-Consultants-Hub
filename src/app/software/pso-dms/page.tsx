import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PsoDmsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
                PSO Working Details
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                A web-based tool for the RR Parkon PSO team to track project
                details, drawings, and revisions in a centralized database.
              </p>
            </div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle>Application Overview</CardTitle>
                <CardDescription>
                  Built with Next.js, React, and Firebase (Firestore), this application provides a modern, secure, and efficient way to manage project data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary/90 mb-2">
                    Login/Signup
                  </h3>
                  <p className="text-muted-foreground">
                    Access is restricted to company employees. Users can only
                    sign up and log in with an email address ending in
                    @rrglobal.com. User accounts are securely managed by
                    Firebase Authentication.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary/90 mb-2">
                    User Roles
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    The application supports two main user roles:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>PSO Executive (Default):</strong> Can create new
                      project entries, add and edit associated drawings, and
                      view their personal dashboard.
                    </li>
                    <li>
                      <strong>Admin:</strong> Has full control, including all
                      executive functions, plus access to an admin dashboard with
                      aggregated stats, data export to Excel, and management of
                      application settings and user privileges.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary/90 mb-2">
                    Core Features
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>Project Entry Form:</strong> The heart of the application for creating and editing projects, including lead numbers, customer details, and salesperson assignment.
                    </li>
                     <li>
                      <strong>Drawing Management:</strong> Track multiple drawings (e.g., Proposal, GAD) within each project, with version control (R0, R1), key dates, and system details.
                    </li>
                  </ul>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold text-primary/90 mb-2">
                    Data Dashboards
                  </h3>
                   <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>My Dashboard:</strong> A personal dashboard for each user showing statistics on their work, including drawing counts, pallet totals, and monthly activity charts.
                    </li>
                     <li>
                      <strong>Admin Dashboard:</strong> A powerful dashboard for admins to view aggregated stats, filter by user, and gain insights into team contributions.
                    </li>
                    <li>
                      <strong>Submitted Entries Page:</strong> A filterable list of all project entries, allowing for easy searching and data retrieval.
                    </li>
                  </ul>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold text-primary/90 mb-2">
                    Technology Stack
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    The application leverages a modern and robust tech stack:
                  </p>
                   <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>Frontend:</strong> Next.js and React, with UI components from ShadCN UI and styling by Tailwind CSS for a responsive interface.
                    </li>
                     <li>
                      <strong>Backend & Database:</strong> Firebase Firestore for real-time data storage and Firebase Authentication for secure user management.
                    </li>
                     <li>
                      <strong>State Management:</strong> React hooks and context for efficient data sharing across the application.
                    </li>
                  </ul>
                </div>
                 <div className="pt-4 text-center">
                   <p className="font-medium text-primary/90">
                     In simple terms, it's a secure, internal web portal that replaces manual tracking with a dynamic, multi-user database application, providing valuable insights and streamlined data management.
                   </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
