
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { semesterData } from "@/lib/data";
import { BookOpen, FileText } from "lucide-react";
import { useFaculty } from "@/contexts/FacultyContext";

export function SemesterSidebar() {
  const location = useLocation();
  const { facultyId, semesterId } = useParams();
  const { selectedFaculty } = useFaculty();
  console.log("This is seleceted faculty   from semester side bar",selectedFaculty)

  // Extract the current subject ID from the URL if it exists
  const subjectMatch = location.pathname.match(/\/subject\/([^/]+)/);
  const currentSubjectId = subjectMatch ? subjectMatch[1] : null;

  // Determine if we're in notes or revision section
  const isNotesSection = location.pathname.includes('/notes/');
  const isRevisionSection = location.pathname.includes('/revision/');

  if (!facultyId || !selectedFaculty) return null;

  return (
    <Card className="h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{selectedFaculty.name} Faculty</h2>
      </div>
      <div className="p-2">
        <div className="mb-4 flex flex-col gap-2">
          <Link to={`/faculty/${facultyId}/semester/${semesterId}`}>
            <Button 
              variant={!isNotesSection && !isRevisionSection ? "default" : "outline"} 
              size="sm" 
              className="w-full justify-start gap-2"
            >
              <FileText className="h-4 w-4" />
              Question Papers
            </Button>
          </Link>
          <Link to={`/faculty/${facultyId}/notes/semester/${semesterId}`}>
            <Button 
              variant={isNotesSection ? "default" : "outline"} 
              size="sm" 
              className="w-full justify-start gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Study Notes
            </Button>
          </Link>
          <Link to={`/faculty/${facultyId}/revision/semester/${semesterId}`}>
            <Button 
              variant={isRevisionSection ? "default" : "outline"} 
              size="sm" 
              className="w-full justify-start gap-2"
            >
              <FileText className="h-4 w-4" />
              Revision Materials
            </Button>
          </Link>
        </div>

        <div className="mb-2 px-2 pt-2 text-sm font-medium text-muted-foreground">
          Semesters
        </div>
        <Accordion 
          type="single" 
          collapsible 
          defaultValue={semesterId || undefined}
          className="w-full"
        >
          {selectedFaculty.structure.map((semester) => (
            <AccordionItem key={semester.id} value={semester.id}>
              <AccordionTrigger className="px-3 py-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                {semester.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-5 space-y-1">
                  {semester.subjects.map((subject,index) => (
                    <Button
                      key={subject}
                      variant={currentSubjectId === index.toString() ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                    >
                      <Link 
                        to={isNotesSection
                          ? `/faculty/${facultyId}/notes/semester/${semester.id}/subject/${subject}`
                          : isRevisionSection
                            ? `/faculty/${facultyId}/revision/semester/${semester.id}/subject/${subject}`
                            : `/faculty/${facultyId}/semester/${semester.id}/subject/${subject}`
                        }
                      >
                        {subject}
                      </Link>
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}
