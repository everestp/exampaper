
import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { semesterData, getNotes } from "@/lib/data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useFaculty } from "@/contexts/FacultyContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

const NotesPage = () => {
  const { facultyId, semesterId, subjectId } = useParams();
  const { selectedFaculty } = useFaculty();

  // Find the current semester
  const semester = semesterData.find(s => s.id === semesterId);
  
  // Find the current subject if subjectId is provided
  const subject = subjectId ? semester?.subjects.find(s => s.id === subjectId) : null;

  // If semester not found or no faculty selected, navigate to 404
  if (!semester || !facultyId || !selectedFaculty) {
    return <Navigate to="/not-found" />;
  }

  // If subject ID is provided but not found, navigate to 404
  if (subjectId && !subject) {
    return <Navigate to="/not-found" />;
  }

  // If we're viewing notes for a specific subject
  if (subject) {
    // Get notes for this subject
    const notes = getNotes(facultyId, semesterId!, subjectId!);

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
                <BreadcrumbLink asChild>
                  <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}`}>Notes</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{subject.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{subject.name} - Study Notes</h1>
            <p className="text-muted-foreground mt-1">
              {selectedFaculty.name} Faculty, {semester.name}
            </p>
          </div>

          <Tabs defaultValue="notes" className="mb-6">
            <TabsList>
              <TabsTrigger value="papers" asChild>
                <Link to={`/faculty/${facultyId}/semester/${semesterId}/subject/${subjectId}`}>
                  Question Papers
                </Link>
              </TabsTrigger>
              <TabsTrigger value="notes">Study Notes</TabsTrigger>
              <TabsTrigger value="revision" asChild>
                <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}/subject/${subjectId}`}>
                  Revision Materials
                </Link>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <h2 className="text-xl font-bold">Available Study Notes</h2>
                  </CardHeader>
                  <CardContent>
                    {notes.length > 0 ? (
                      <ul className="space-y-4">
                        {notes.map((note) => (
                          <li key={note.id} className="flex items-center justify-between border-b pb-4">
                            <div>
                              <h3 className="font-medium">{note.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Uploaded: {new Date(note.uploadedAt).toLocaleDateString()}
                              </p>
                            </div>
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
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                        <p className="mt-2 text-muted-foreground">No study notes available yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }
  
  // If we're viewing all subjects for this semester
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
              <BreadcrumbLink>Study Notes</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Study Notes - {semester.name}</h1>
          <p className="text-muted-foreground mt-1">
            {selectedFaculty.name} Faculty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semester.subjects.map((subject) => (
            <Card key={subject.id} className="hover:border-study-300 transition-all">
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {subject.name}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access comprehensive study notes for {subject.name}
                </p>
                <Button 
                  variant="default" 
                  className="w-full" 
                  asChild
                >
                  <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}/subject/${subject.id}`}>
                    View Notes
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
