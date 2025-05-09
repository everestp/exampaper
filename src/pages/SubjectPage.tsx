import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Modal from "react-modal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { getQuestionPapers } from "@/lib/facultyData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useFaculty } from "@/contexts/FacultyContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Download, Eye } from "lucide-react";

// Set Modal accessibility
Modal.setAppElement("#root");

// PDFViewer Component
interface PDFViewerProps {
  pdfUrl: string;
}

function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  return (
    <>
      {/* Button to open the PDF viewer */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Eye className="w-4 h-4" />
        View
      </Button>

      {/* Modal for PDF Viewer */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 overflow-auto relative max-w-4xl">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-red-600 text-xl"
            aria-label="Close PDF Viewer"
          >
            ✖
          </button>

          {/* PDF Viewer Controls */}
          <div className="border-b p-2 flex justify-between items-center bg-muted/50">
            <div className="text-sm">PDF Viewer</div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                aria-label="Zoom Out"
              >
                -
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetZoom}
                aria-label="Reset Zoom"
              >
                {Math.round(zoom * 100)}%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= 2}
                aria-label="Zoom In"
              >
                +
              </Button>
            </div>
          </div>

          {/* PDF Display */}
          <div className="flex-1 overflow-auto bg-muted/30 h-[calc(100%-60px)]">
            <iframe
              src={`${pdfUrl}#toolbar=0&zoom=${zoom * 100}`}
              title="PDF Viewer"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

// SubjectPage Component
interface QuestionPaper {
  id: string;
  subject: string;
  title: string;
  year: number;
  facultyId: string;
  semesterId: string;
  downloadUrl: string;
  uploadedAt: string;
}

const SubjectPage = () => {
  const { facultyId, semesterId, subject } = useParams<{
    facultyId: string;
    semesterId: string;
    subject: string;
  }>();
  const { selectedFaculty } = useFaculty();

  // Validate parameters and faculty data
  if (!facultyId || !semesterId || !subject || !selectedFaculty) {
    return <Navigate to="/not-found" />;
  }

  // Find the current semester
  const semester = selectedFaculty.structure.find((s) => s.id === semesterId);
  const currentSubject = semester?.subjects.find((s) => s === subject);

  // If semester or subject not found, navigate to 404
  if (!semester || !currentSubject) {
    return <Navigate to="/not-found" />;
  }

  // Get question papers for this subject
  const questionPapers: QuestionPaper[] = getQuestionPapers(facultyId, semesterId, subject);

  // Group question papers by year
  const papersByYear = questionPapers.reduce(
    (acc, paper) => {
      const year = paper.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(paper);
      return acc;
    },
    {} as Record<number, QuestionPaper[]>
  );

  // Sort years in descending order
  const sortedYears = Object.keys(papersByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 md:shrink-0">
          <SemesterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-blue-600 hover:underline">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={`/faculty/${facultyId}`}
                    className="text-blue-600 hover:underline"
                  >
                    {selectedFaculty.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={`/faculty/${facultyId}/semester/${semesterId}`}
                    className="text-blue-600 hover:underline"
                  >
                    {semester.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="font-semibold">{subject}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{subject}</h1>
            <p className="text-lg text-gray-500 mt-2">
              {selectedFaculty.name} Faculty, {semester.name}
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="papers" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-lg p-1">
              <TabsTrigger
                value="papers"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
              >
                <FileText className="w-4 h-4 mr-2" />
                Question Papers
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                asChild
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
              >
                <Link
                  to={`/faculty/${facultyId}/notes/semester/${semesterId}/subject/${subject}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Notes
                </Link>
              </TabsTrigger>
              <TabsTrigger
                value="revision"
                asChild
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
              >
                <Link
                  to={`/faculty/${facultyId}/revision/semester/${semesterId}/subject/${subject}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Revision Materials
                </Link>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="papers" className="mt-6">
              {sortedYears.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-lg">
                    No question papers available for {subject}.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {sortedYears.map((year) => (
                    <Card
                      key={year}
                      className="shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          {papersByYear[year].map((paper) => (
                            <li
                              key={paper.id}
                              className="flex items-center justify-between py-2 border-b last:border-b-0"
                            >
                              <div className="flex flex-col">
                                <span className="text-gray-800 font-medium">
                                  {`${paper.subject} - ${paper.year}`}
                                </span>
                                <span className="text-sm text-gray-500">
                                  Year: {paper.year}
                                </span>
                              </div>
                              <div className="flex gap-3">
                                {/* View Button with PDFViewer */}
                                <PDFViewer pdfUrl={paper.downloadUrl} />
                                {/* Download Button */}
                                <Button
                                  variant="default"
                                  size="sm"
                                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                                  asChild
                                >
                                  <a
                                    href={paper.downloadUrl}
                                    download
                                    rel="noopener noreferrer"
                                  >
                                    <Download className="w-4 h-4" />
                                    Download
                                  </a>
                                </Button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;