import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AboutPage } from "@/pages/AboutPage";
import { AcademicsPage } from "@/pages/AcademicsPage";
import { AdmissionsPage } from "@/pages/AdmissionsPage";
import { ContactPage } from "@/pages/ContactPage";
import { EventsPage } from "@/pages/EventsPage";
import { FacilitiesPage } from "@/pages/FacilitiesPage";
import { HomePage } from "@/pages/HomePage";
import { NoticesPage } from "@/pages/NoticesPage";
import { ResultsPage } from "@/pages/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "academics", element: <AcademicsPage /> },
      { path: "facilities", element: <FacilitiesPage /> },
      { path: "results", element: <ResultsPage /> },
      { path: "admissions", element: <AdmissionsPage /> },
      { path: "notices", element: <NoticesPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
