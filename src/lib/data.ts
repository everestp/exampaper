
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

// Available faculties
export const facultyData: Faculty[] = [
  { id: "medical", name: "Medical" },
  { id: "management", name: "Management" },
  { id: "ctevt", name: "CTEVT" }
];

// Generate subject data for all semesters
const createSubjects = (semesterId: string): Subject[] => {
  const subjectNames = [
    "Mathematics", 
    "Programming", 
    "Electronics", 
    "Engineering Graphics", 
    "Communication Skills"
  ];
  
  return subjectNames.map((name, index) => ({
    id: `${semesterId}-sub-${index + 1}`,
    name: `${name} ${semesterId}`
  }));
};

// Generate semester data
export const semesterData: Semester[] = Array.from({ length: 8 }, (_, i) => {
  const semesterId = `${i + 1}`;
  return {
    id: semesterId,
    name: `Semester ${i + 1}`,
    subjects: createSubjects(semesterId)
  };
});

// Generate question paper data
export const questionPapersData: QuestionPaper[] = [];

// Generate notes data
export const notesData: Note[] = [];

// Generate revision materials data
export const revisionMaterialsData: RevisionMaterial[] = [];

// Get current year
const currentYear = new Date().getFullYear();

// Generate 10 years of papers for each faculty, semester, and subject
facultyData.forEach(faculty => {
  semesterData.forEach(semester => {
    semester.subjects.forEach(subject => {
      // Generate question papers
      for (let year = currentYear - 9; year <= currentYear; year++) {
        questionPapersData.push({
          id: `${faculty.id}-${semester.id}-${subject.id}-${year}`,
          title: `${subject.name} - ${year} Question Paper`,
          year,
          facultyId: faculty.id,
          semesterId: semester.id,
          subjectId: subject.id,
          downloadUrl: "#",
          uploadedAt: new Date(year, 5, 15).toISOString()
        });
      }
      
      // Generate notes
      notesData.push({
        id: `note-${faculty.id}-${semester.id}-${subject.id}`,
        title: `${subject.name} Comprehensive Notes`,
        facultyId: faculty.id,
        semesterId: semester.id,
        subjectId: subject.id,
        downloadUrl: "#",
        uploadedAt: new Date().toISOString()
      });
      
      // Generate revision materials
      revisionMaterialsData.push({
        id: `revision-${faculty.id}-${semester.id}-${subject.id}`,
        title: `${subject.name} Last-Minute Revision Guide`,
        facultyId: faculty.id,
        semesterId: semester.id,
        subjectId: subject.id,
        downloadUrl: "#",
        uploadedAt: new Date().toISOString()
      });
    });
  });
});

// Helper functions for fetching data

// Function to get question papers by faculty, semester and subject
export const getQuestionPapers = (facultyId: string, semesterId: string, subjectId: string): QuestionPaper[] => {
  return questionPapersData
    .filter(paper => paper.facultyId === facultyId && paper.semesterId === semesterId && paper.subjectId === subjectId)
    .sort((a, b) => b.year - a.year); // Sort by year descending
};

// Function to get notes by faculty, semester and subject
export const getNotes = (facultyId: string, semesterId: string, subjectId: string): Note[] => {
  return notesData
    .filter(note => note.facultyId === facultyId && note.semesterId === semesterId && note.subjectId === subjectId);
};

// Function to get revision materials by faculty, semester and subject
export const getRevisionMaterials = (facultyId: string, semesterId: string, subjectId: string): RevisionMaterial[] => {
  return revisionMaterialsData
    .filter(material => material.facultyId === facultyId && material.semesterId === semesterId && material.subjectId === subjectId);
};
