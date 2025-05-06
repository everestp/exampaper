
import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { semesterData, getRevisionMaterials } from "@/lib/data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useFaculty } from "@/contexts/FacultyContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";

const RevisionPage = () => {
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

  // If we're viewing revision materials for a specific subject
  if (subject) {
    // Get revision materials for this subject
    const revisionMaterials = getRevisionMaterials(facultyId, semesterId!, subjectId!);

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
                  <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}`}>Revision</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{subject.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{subject.name} - Revision Materials</h1>
            <p className="text-muted-foreground mt-1">
              {selectedFaculty.name} Faculty, {semester.name}
            </p>
          </div>

          <Tabs defaultValue="revision" className="mb-6">
            <TabsList>
              <TabsTrigger value="papers" asChild>
                <Link to={`/faculty/${facultyId}/semester/${semesterId}/subject/${subjectId}`}>
                  Question Papers
                </Link>
              </TabsTrigger>
              <TabsTrigger value="notes" asChild>
                <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}/subject/${subjectId}`}>
                  Study Notes
                </Link>
              </TabsTrigger>
              <TabsTrigger value="revision">Revision Materials</TabsTrigger>
            </TabsList>

            <TabsContent value="revision" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <h2 className="text-xl font-bold">Last-Minute Revision Materials</h2>
                  </CardHeader>
                  <CardContent>
                    {revisionMaterials.length > 0 ? (
                      <ul className="space-y-4">
                        {revisionMaterials.map((material) => (
                          <li key={material.id} className="flex items-center justify-between border-b pb-4">
                            <div>
                              <h3 className="font-medium">{material.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Uploaded: {new Date(material.uploadedAt).toLocaleDateString()}
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
                        <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                        <p className="mt-2 text-muted-foreground">No revision materials available yet.</p>
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
              <BreadcrumbLink>Revision Materials</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Revision Materials - {semester.name}</h1>
          <p className="text-muted-foreground mt-1">
            {selectedFaculty.name} Faculty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semester.subjects.map((subject) => (
            <Card key={subject.id} className="hover:border-study-300 transition-all">
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {subject.name}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access last-minute revision materials for {subject.name}
                </p>
                <Button 
                  variant="default" 
                  className="w-full" 
                  asChild
                >
                  <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}/subject/${subject.id}`}>
                    View Revision Materials
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

export default RevisionPage;
