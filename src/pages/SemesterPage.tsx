
import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { semesterData } from "@/lib/data";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { useFaculty } from "@/contexts/FacultyContext";

const SemesterPage = () => {
  const { facultyId, semesterId } = useParams();
  const { selectedFaculty } = useFaculty();

  // Find the current semester
  const semester = semesterData.find(s => s.id === semesterId);

  // If semester not found or no faculty selected, navigate to 404
  if (!semester || !facultyId || !selectedFaculty) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="container flex flex-col md:flex-row gap-6 py-8">
      <div className="w-full md:w-64 md:shrink-0">
        <SemesterSidebar />
      </div>
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{semester.name} - {selectedFaculty.name} Faculty</h1>
          <p className="text-muted-foreground mt-1">
            Select a subject to view available question papers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semester.subjects.map((subject) => (
            <Card key={subject.id} className="hover:border-study-300 transition-all">
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription>10 years of question papers available</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access question papers from {new Date().getFullYear() - 9} to {new Date().getFullYear()}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link to={`/faculty/${facultyId}/semester/${semester.id}/subject/${subject.id}`}>
                    View Papers
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}`}>
            <Button variant="outline" className="gap-2">
              <BookOpen className="w-4 h-4" />
              View Study Notes
            </Button>
          </Link>
          <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}`}>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              View Revision Materials
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SemesterPage;
