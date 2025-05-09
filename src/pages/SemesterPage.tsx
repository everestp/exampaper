
import { useParams, Navigate, Link ,} from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SemesterSidebar } from "@/components/SemesterSidebar";
import { semesterData } from "@/lib/data";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { useFaculty } from "@/contexts/FacultyContext";
import { facultyData } from "@/lib/facultyData";
import { useState } from "react";
import { sub } from "date-fns";
const SemesterPage = () => {
  const { facultyId, semesterId } = useParams();
  console.log("This is semsteer page facId seemId",facultyId,semesterId)
  const { selectedFaculty } = useFaculty();
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<string[]>([]);

console.log("This is theee facutyid and Semester Id", facultyId,semesterId)
  // Find the current semester
  const faculty = facultyData.find(s => s.id === facultyId);

console.log("Does the semester  data is printed Sucessfuly",faculty)
// alert(faculty.name)
  // If semester not found or no faculty selected, navigate to 404
  if (!faculty || !facultyId || !selectedFaculty) {
    return <Navigate to="/not-found" />;
  }
  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const semesterId = event.target.value;
    const selectedSemesterObj = faculty.structure.find((semester) => semester.id === semesterId);

    if (selectedSemesterObj) {
      setSelectedSemester(selectedSemesterObj.name);
      setSubjects(selectedSemesterObj.subjects);
    } else {
      setSelectedSemester(null);
      setSubjects([]);
    }
  };



  return (
    <div className="container flex flex-col md:flex-row gap-6 py-8">
      <div className="w-full md:w-64 md:shrink-0">
        <SemesterSidebar />
      </div>
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{faculty.name}</h1>
          <p className="text-muted-foreground mt-1">
            Select a subject to view  Resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.structure[0].subjects.map((subject ,index) => (
            <Card key={subject[index]} className="hover:border-study-300 transition-all">
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
                <CardDescription>Question Paper | Notes | Revision Material </CardDescription>
              </CardHeader>
              <CardContent>
              
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link to={`/faculty/${facultyId}/semester/${semesterId}/subject/${subject}`}>
                    View 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
       
          }
        </div>

        
      </div>
    </div>
  );
};

export default SemesterPage;
