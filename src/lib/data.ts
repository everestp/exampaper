// Models
export interface Faculty {
  id: string;
  name: string;
}

export interface Subject {
  id: string;
  name: string;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface QuestionPaper {
  id: string;
  title: string;
  year: number;
  facultyId: string;
  semesterId: string;
  subjectId: string;
  downloadUrl: string;
  uploadedAt: string;
}

export interface Note {
  id: string;
  title: string;
  facultyId: string;
  semesterId: string;
  subjectId: string;
  downloadUrl: string;
  uploadedAt: string;
}

export interface RevisionMaterial {
  id: string;
  title: string;
  facultyId: string;
  semesterId: string;
  subjectId: string;
  downloadUrl: string;
  uploadedAt: string;
}

// Faculties
export const facultyData: Faculty[] = [
  
    { "id": "csit", "name": "BSc CSIT" },
    { "id": "bca", "name": "BCA" },
    { "id": "medical", "name": "MBBS" },
    { "id": "management", "name": "BBA" },
    { "id": "ctevt", "name": "BEd" },
    { "id": "bbs", "name": "BBS" },
    { "id": "bit", "name": "BIT" },
    { "id": "bim", "name": "BIM" },
    { "id": "bhm", "name": "BHM" },
    { "id": "civil", "name": "Bachelor of Civil Engineering" },
    { "id": "microbiology", "name": "BSc Microbiology" },
    { "id": "computer", "name": "Bachelor of Computer Engineering" },
    { "id": "forestry", "name": "BSc Forestry" }
 
  
  
];

// BSc CSIT Subjects by Semester
export const csitSemester1Subjects: Subject[] = [
  { id: "1-sub-1", name: "Introduction to Information Technology" },
  { id: "1-sub-2", name: "C Programming" },
  { id: "1-sub-3", name: "Digital Logic" },
  { id: "1-sub-4", name: "Mathematics I" },
  { id: "1-sub-5", name: "Physics" }
];

export const csitSemester2Subjects: Subject[] = [
  { id: "2-sub-1", name: "Object-Oriented Programming (Java)" },
  { id: "2-sub-2", name: "Microprocessor & Computer Architecture" },
  { id: "2-sub-3", name: "Discrete Structures" },
  { id: "2-sub-4", name: "Mathematics II" },
  { id: "2-sub-5", name: "Statistics" }
];

export const csitSemester3Subjects: Subject[] = [
  { id: "3-sub-1", name: "Data Structures & Algorithms" },
  { id: "3-sub-2", name: "Numerical Methods" },
  { id: "3-sub-3", name: "Computer Architecture" },
  { id: "3-sub-4", name: "Computer Graphics" },
  { id: "3-sub-5", name: "Statistic II" }
];

export const csitSemester4Subjects: Subject[] = [
  { id: "4-sub-1", name: "Database Management Systems" },
  { id: "4-sub-2", name: "Computer Networks" },
  { id: "4-sub-3", name: "Artificial Intelligence" },
  { id: "4-sub-4", name: "Theory of Computation" },
  { id: "4-sub-5", name: "Probability & Statistics" }
];

export const csitSemester5Subjects: Subject[] = [
  { id: "5-sub-1", name: "Software Engineering" },
  { id: "5-sub-2", name: "Web Technology" },
  { id: "5-sub-3", name: "Cryptography" },
  { id: "5-sub-4", name: "Simulation & Modeling" },
  { id: "5-sub-5", name: "Elective I" }
];

export const csitSemester6Subjects: Subject[] = [
  { id: "6-sub-1", name: "Information Security" },
  { id: "6-sub-2", name: "Multimedia Systems" },
  { id: "6-sub-3", name: "Distributed Systems" },
  { id: "6-sub-4", name: "Applied Mathematics" },
  { id: "6-sub-5", name: "Elective II" }
];

export const csitSemester7Subjects: Subject[] = [
  { id: "7-sub-1", name: "Data Mining & Warehousing" },
  { id: "7-sub-2", name: "Network Security" },
  { id: "7-sub-3", name: "Mobile Computing" },
  { id: "7-sub-4", name: "Elective III" },
  { id: "7-sub-5", name: "Project Work" }
];

export const csitSemester8Subjects: Subject[] = [
  { id: "8-sub-1", name: "Internship" },
  { id: "8-sub-2", name: "Elective IV" },
  { id: "8-sub-3", name: "Final Project" }
];

// Semester Data
export const semesterData: Semester[] = [
  { id: "1", name: "Semester 1", subjects: csitSemester1Subjects },
  { id: "2", name: "Semester 2", subjects: csitSemester2Subjects },
  { id: "3", name: "Semester 3", subjects: csitSemester3Subjects },
  { id: "4", name: "Semester 4", subjects: csitSemester4Subjects },
  { id: "5", name: "Semester 5", subjects: csitSemester5Subjects },
  { id: "6", name: "Semester 6", subjects: csitSemester6Subjects },
  { id: "7", name: "Semester 7", subjects: csitSemester7Subjects },
  { id: "8", name: "Semester 8", subjects: csitSemester8Subjects }
];

// Data Repositories
export const questionPapersData: QuestionPaper[] = [];
export const notesData: Note[] = [];
export const revisionMaterialsData: RevisionMaterial[] = [];

// Year
const currentYear = new Date().getFullYear();

// Helper Functions
export const getQuestionPapers = (facultyId: string, semesterId: string, subjectId: string): QuestionPaper[] => {
 const a = questionPapersData
    .filter(paper => paper.facultyId === facultyId && paper.semesterId === semesterId && paper.subjectId === subjectId)
    .sort((a, b) => b.year - a.year);
    console.log("Does some question paper is returing",a)
    return a
};

export const getNotes = (facultyId: string, semesterId: string, subjectId: string): Note[] => {
  return notesData
    .filter(note => note.facultyId === facultyId && note.semesterId === semesterId && note.subjectId === subjectId);
};

export const getRevisionMaterials = (facultyId: string, semesterId: string, subjectId: string): RevisionMaterial[] => {
  return revisionMaterialsData
    .filter(material => material.facultyId === facultyId && material.semesterId === semesterId && material.subjectId === subjectId);
};