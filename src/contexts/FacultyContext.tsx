
import { createContext, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Faculty, facultyData } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

interface FacultyContextType {
  selectedFaculty: Faculty | null;
  selectFaculty: (facultyId: string) => void;
}

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export function FacultyProvider({ children }: { children: React.ReactNode }) {
  const params = useParams<{ facultyId: string }>();
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(() => {
    if (params.facultyId) {
      return facultyData.find(f => f.id === params.facultyId) || null;
    }
    return null;
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const selectFaculty = (facultyId: string) => {
    const faculty = facultyData.find(f => f.id === facultyId);
    if (faculty) {
      setSelectedFaculty(faculty);
      toast({
        title: "Faculty Selected",
        description: `You've selected ${faculty.name} faculty`,
      });
    }
  };

  return (
    <FacultyContext.Provider value={{ selectedFaculty, selectFaculty }}>
      {children}
    </FacultyContext.Provider>
  );
}

export function useFaculty() {
  const context = useContext(FacultyContext);
  if (context === undefined) {
    throw new Error("useFaculty must be used within a FacultyProvider");
  }
  return context;
}
