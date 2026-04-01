import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppShell } from "./components/Layout";
import { embodiedNav, opticNav } from "./content";
import DeckPage from "./pages/DeckPages";
import DocumentsPage from "./pages/DocumentsPage";
import {
  EmbodiedCharterPage,
  EmbodiedHomePage,
  EmbodiedProgramsPage,
} from "./pages/EmbodiedPages";
import {
  OpticDevelopersPage,
  OpticGovernmentPage,
  OpticHomePage,
  OpticInvestorPage,
  OpticMockupsPage,
  OpticPlatformPage,
} from "./pages/OpticPages";

export default function App() {
  const location = useLocation();
  const embodied = location.pathname.startsWith("/embodied-labs");

  return (
    <AppShell theme={embodied ? "embodied" : "optic"} nav={embodied ? embodiedNav : opticNav}>
      <Routes>
        <Route path="/" element={<OpticHomePage />} />
        <Route path="/optic/platform" element={<OpticPlatformPage />} />
        <Route path="/optic/developers" element={<OpticDevelopersPage />} />
        <Route path="/optic/government" element={<OpticGovernmentPage />} />
        <Route path="/optic/investor" element={<OpticInvestorPage />} />
        <Route path="/optic/mockups" element={<OpticMockupsPage />} />
        <Route path="/optic/documents" element={<DocumentsPage />} />
        <Route path="/decks/:slug" element={<DeckPage />} />
        <Route path="/embodied-labs" element={<EmbodiedHomePage />} />
        <Route path="/embodied-labs/programs" element={<EmbodiedProgramsPage />} />
        <Route path="/embodied-labs/charter" element={<EmbodiedCharterPage />} />
        <Route path="/embodied-labs/documents" element={<DocumentsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}
