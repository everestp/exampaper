
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
import BookBrowser from "./pages/BookBrowser";
import BookDetails from "./pages/BookDetails";
import DiscussionPage from "./pages/DiscussionPage";
import CreateDiscussionPage from "./pages/CreateDiscussionPage";
import DiscussionDetailPage from "./pages/DiscussionDetailsPage";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import DiscussionsPage from "./components/NavBar";
import CourseSelection from "./lib/test";

function AppRoutes() {
  return (
    <FacultyProvider>
      <FavoritesProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/faculty/:facultyId">
            <Route path="semester/:semesterId" element={<SemesterPage />} />
            <Route path="semester/:semesterId/subject/:subjectId" element={<SubjectPage />} />
            <Route path="notes/semester/:semesterId/subject/:subjectId" element={<NotesPage />} />
            <Route path="revision/semester/:semesterId/subject/:subjectId" element={<RevisionPage />} />
          </Route>
          <Route path="/books" element={<BookBrowser />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/discussions" element={<DiscussionPage />} />
            <Route path="/discussions/create" element={<CreateDiscussionPage />} />
            <Route path="/discussions/:postId" element={<DiscussionDetailPage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      </FavoritesProvider>
    </FacultyProvider>
  );
}

export default AppRoutes;
