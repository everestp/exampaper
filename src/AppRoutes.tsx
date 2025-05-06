
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import NotesPage from "./pages/NotesPage";
import RevisionPage from "./pages/RevisionPage";
import { FacultyProvider } from "./contexts/FacultyContext";

function AppRoutes() {
  return (
    <FacultyProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/faculty/:facultyId">
            <Route path="semester/:semesterId" element={<SemesterPage />} />
            <Route path="semester/:semesterId/subject/:subjectId" element={<SubjectPage />} />
            <Route path="notes/semester/:semesterId/subject/:subjectId" element={<NotesPage />} />
            <Route path="revision/semester/:semesterId/subject/:subjectId" element={<RevisionPage />} />
          </Route>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </FacultyProvider>
  );
}

export default AppRoutes;
