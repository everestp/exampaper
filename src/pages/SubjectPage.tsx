
import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { semesterData, getQuestionPapers } from "@/lib/data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useFaculty } from "@/contexts/FacultyContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText } from "lucide-react";

const SubjectPage = () => {
  const { facultyId, semesterId, subjectId } = useParams();
  const { selectedFaculty } = useFaculty();

  // Find the current semester
  const semester = semesterData.find(s => s.id === semesterId);
  
  // Find the current subject
  const subject = semester?.subjects.find(s => s.id === subjectId);

  // If semester or subject not found or no faculty selected, navigate to 404
  if (!semester || !subject || !facultyId || !selectedFaculty) {
    return <Navigate to="/not-found" />;
  }

  // Get question papers for this subject
  const questionPapers = getQuestionPapers(facultyId, semesterId!, subjectId!);

  // Group question papers by year
  const papersByYear = questionPapers.reduce((acc, paper) => {
    const year = paper.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(paper);
    return acc;
  }, {} as Record<number, typeof questionPapers>);

  // Sort years in descending order
  const sortedYears = Object.keys(papersByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="container flex flex-col md:flex-row gap-6 py-8">
      <div className="w-full md:w-64 md:shrink-0">
        <SemesterSidebar />
      </div>
      <div className="flex-1">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/faculty/${facultyId}`}>{selectedFaculty.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/faculty/${facultyId}/semester/${semesterId}`}>{semester.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{subject.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{subject.name}</h1>
          <p className="text-muted-foreground mt-1">
            {selectedFaculty.name} Faculty, {semester.name}
          </p>
        </div>

        <Tabs defaultValue="papers" className="mb-6">
          <TabsList>
            <TabsTrigger value="papers">Question Papers</TabsTrigger>
            <TabsTrigger value="notes" asChild>
              <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}/subject/${subjectId}`}>
                Study Notes
              </Link>
            </TabsTrigger>
            <TabsTrigger value="revision" asChild>
              <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}/subject/${subjectId}`}>
                Revision Materials
              </Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="mt-6">
            <div className="space-y-6">
              {sortedYears.map((year) => (
                <Card key={year}>
                  <CardHeader className="pb-3">
                    <h2 className="text-xl font-bold">{year}</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {papersByYear[year].map((paper) => (
                        <li key={paper.id} className="flex items-center justify-between border-b pb-2">
                          <span>{paper.title}</span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="default" size="sm" className="bg-study-600 hover:bg-study-700">
                              Download
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SubjectPage;
