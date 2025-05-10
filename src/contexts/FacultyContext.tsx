
import { createContext, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { facultyData ,Faculty} from "@/lib/facultyData";




interface FacultyContextType {
  selectedFaculty: Faculty | null;
  selectFaculty: (facultyId: string) => void;

}

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export function FacultyProvider({ children }: { children: React.ReactNode }) {
  const params = useParams<{ facultyId: string }>();
  console.log("Falcuty context this is   inside the param",params.facultyId)
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
      console.log("This= is the data inside the selected faculty",selectedFaculty)
      toast({
        title: "Faculty Selected",
        description: `You've selected ${faculty.name} faculty`,
      });
    }
  };
  const contextValue = {
    selectedFaculty,
    selectFaculty,
   

  }

  const getPaper = async()=>{

    try {
      const response = await storageService.getPaper()
  setNoteData(response)
      
    } catch (error) {
      console.log("Error fetching  Paper Data",error)
    }
  }
  const getNote = async()=>{

    try {
      const response = await storageService.getNote()
  setNoteData(response)
      
    } catch (error) {
      console.log("Error fetching  Note Data",error)
    }
  }

  const getRevision = async()=>{

    try {
      const response = await storageService.getRevision()
  setRevisionData(response)
      
    } catch (error) {
      console.log("Error fetching  Revisio nData",error)
    }
  }
useEffect(()=>{
getPaper()
getNote()
getRevision()
},[])


  return (
    <FacultyContext.Provider value={contextValue}>
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
