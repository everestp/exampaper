 export interface Period {
  id: string;
  name: string;
  subjects: string[];
}

 export interface Faculty {
  id: string;
  name: string;
  type: "semester" | "year";
  duration: number;
  structure: Period[];
}



export interface QuestionPaper {
  id: string;
  title: string;
  year: number;
  facultyId: string;
  semesterId: string;
  subject: string;
  downloadUrl: string;
  uploadedAt: string;
}

export interface Note {
  id: string;
  title: string;
  facultyId: string;
  semesterId: string;
  subject: string;
  downloadUrl: string;
  uploadedAt: string;
}

export interface RevisionMaterial {
  id: string;
  title: string;
  facultyId: string;
  semesterId: string;
  subject: string;
  downloadUrl: string;
  uploadedAt: string;
}

 export const facultyData: Faculty[] = [
  {
    id: "csit",
    name: "BSc CSIT",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Introduction to Information Technology", "Programming in C", "Digital Logic", "Mathematics I"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Object-Oriented Programming", "Microprocessor", "Discrete Structures", "Mathematics II"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Data Structures and Algorithms", "Numerical Methods", "Computer Architecture", "Computer Graphics"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Database Management Systems", "Computer Networks", "Artificial Intelligence", "Theory of Computation"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Software Engineering", "Web Technology", "Cryptography", "Simulation and Modeling"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Information Security", "Multimedia Systems", "Distributed Systems", "Applied Mathematics"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Data Mining and Warehousing", "Network Security", "Mobile Computing", "Project Work"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Internship", "Elective IV", "Final Project"],
      },
    ],
  },
  {
    id: "mbbs",
    name: "MBBS",
    type: "year",
    duration: 5.5,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Human Anatomy", "Physiology", "Biochemistry"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Pathology", "Pharmacology", "Microbiology"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Forensic Medicine", "Community Medicine", "Ophthalmology"],
      },
      {
        id: "4",
        name: "Year 4",
        subjects: ["General Medicine", "General Surgery", "Pediatrics", "Obstetrics and Gynecology"],
      },
      {
        id: "5",
        name: "Year 5",
        subjects: ["Internship"],
      },
    ],
  },
  {
    id: "bca",
    name: "BCA",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Computer Fundamentals", "Programming in C", "Mathematics I", "English I"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Data Structures", "Digital Logic", "Database Management Systems", "Mathematics II"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Operating Systems", "Computer Networks", "Software Engineering", "Financial Accounting"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Web Technology", "Artificial Intelligence", "Mobile Application Development", "Statistics"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Java Programming", "System Analysis and Design", "Computer Organization", "English II"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Cloud Computing", "Data Mining", "Project I", "Management Information Systems"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Cyber Security", "E-Commerce", "Elective I", "Network Administration"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Internship", "Final Project", "Elective II"],
      },
    ],
  },
  {
    id: "bba",
    name: "BBA",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Mathematics"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Business Communication", "Organizational Behavior", "Marketing Management", "Business Statistics"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Human Resource Management", "Financial Management", "Business Law", "Cost Accounting"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Strategic Management", "Entrepreneurship", "International Business", "Management Information Systems"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Operations Management", "Business Ethics", "Project Management", "Elective I"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Strategic Marketing", "Investment Analysis", "Research Methodology", "Elective II"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Supply Chain Management", "Corporate Governance", "Elective III", "Project Work"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Internship", "Final Project", "Elective IV"],
      },
    ],
  },
  {
    id: "civil-eng",
    name: "Bachelor of Civil Engineering",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Engineering Mathematics I", "Engineering Mechanics", "Engineering Drawing", "Basic Electrical Engineering"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Engineering Mathematics II", "Concrete Technology", "Hydraulics", "Engineering Physics"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Geotechnical Engineering", "Transportation Engineering", "Building Materials", "Engineering Mathematics III"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Water Resources Engineering", "Construction Management", "Environmental Engineering", "Strength of Materials"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Structural Analysis I", "Fluid Mechanics", "Surveying", "Engineering Geology"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Structural Analysis II", "Irrigation Engineering", "Design of Steel Structures", "Elective I"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Earthquake Engineering", "Project Engineering", "Design of RCC Structures", "Elective II"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Final Project", "Internship", "Elective III"],
      },
    ],
  },
  {
    id: "llb",
    name: "Bachelor of Law (LLB)",
    type: "year",
    duration: 3,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Jurisprudence and Legal System", "Constitutional Law", "Contract Law"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Criminal Law", "Corporate Law", "International Law"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Human Rights Law", "Legal Research and Writing", "Judicial Process"],
      },
    ],
  },
  {
    id: "bed",
    name: "Bachelor of Education (BEd)",
    type: "year",
    duration: 4,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Educational Psychology", "Curriculum Development", "Teaching Methods", "English Communication"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Educational Technology", "Assessment and Evaluation", "Subject-Specific Pedagogy", "Sociology of Education"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Educational Administration", "Guidance and Counseling", "Inclusive Education", "Environmental Education"],
      },
      {
        id: "4",
        name: "Year 4",
        subjects: ["Teaching Practice", "Research in Education", "Elective Subject", "Educational Planning"],
      },
    ],
  },
  {
    id: "bpharm",
    name: "Bachelor of Pharmacy (BPharm)",
    type: "year",
    duration: 4,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Pharmaceutical Chemistry", "Human Anatomy and Physiology", "Pharmaceutics I", "Pharmacognosy I"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Pharmacology I", "Pharmaceutical Microbiology", "Pharmaceutics II", "Pharmaceutical Analysis"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Pharmacology II", "Medicinal Chemistry", "Pharmacognosy II", "Hospital Pharmacy"],
      },
      {
        id: "4",
        name: "Year 4",
        subjects: ["Clinical Pharmacy", "Pharmaceutical Management", "Internship", "Biopharmaceutics"],
      },
    ],
  },
  {
    id: "elec-eng",
    name: "Bachelor of Electrical Engineering",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Engineering Mathematics I", "Basic Electrical Engineering", "Engineering Drawing", "Computer Programming"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Engineering Mathematics II", "Circuit Theory", "Engineering Physics", "Electronics I"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Engineering Mathematics III", "Electromagnetic Fields", "Electrical Machines I", "Digital Electronics"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Power Systems I", "Control Systems", "Microprocessors", "Signals and Systems"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Electrical Machines II", "Power Electronics", "Instrumentation", "Elective I"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Power Systems II", "Communication Systems", "Embedded Systems", "Elective II"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Renewable Energy Systems", "High Voltage Engineering", "Project Work", "Elective III"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Final Project", "Internship", "Elective IV"],
      },
    ],
  },
  {
    id: "bph",
    name: "Bachelor of Public Health (BPH)",
    type: "year",
    duration: 4,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Introduction to Public Health", "Human Anatomy and Physiology", "Biostatistics", "Environmental Health"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Epidemiology", "Health Promotion and Education", "Nutrition", "Community Health"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Health Policy and Management", "Research Methodology", "Occupational Health", "Maternal and Child Health"],
      },
      {
        id: "4",
        name: "Year 4",
        subjects: ["Internship", "Public Health Project", "Global Health", "Health Economics"],
      },
    ],
  },
  {
    id: "ba",
    name: "Bachelor of Arts (BA)",
    type: "year",
    duration: 3,
    structure: [
      {
        id: "1",
        name: "Year 1",
        subjects: ["Sociology", "English Literature", "Nepali", "Major Elective I"],
      },
      {
        id: "2",
        name: "Year 2",
        subjects: ["Political Science", "History", "Economics", "Major Elective II"],
      },
      {
        id: "3",
        name: "Year 3",
        subjects: ["Cultural Studies", "Research Methodology", "Major Elective III", "Project Work"],
      },
    ],
  },
  {
    id: "bsw",
    name: "Bachelor of Social Work (BSW)",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Introduction to Social Work", "Sociology for Social Work", "English I", "Nepali I"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Social Work Methods", "Psychology for Social Work", "English II", "Nepali II"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Community Organization", "Social Welfare Administration", "Statistics for Social Work", "Elective I"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Social Case Work", "Human Rights and Social Justice", "Research Methods", "Elective II"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Social Policy and Planning", "Gender and Development", "Field Work I", "Elective III"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Social Work with Groups", "Community Development", "Field Work II", "Elective IV"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["NGO Management", "Counseling Skills", "Project Work", "Elective V"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Internship", "Final Project", "Elective VI"],
      },
    ],
  },
  {
    id: "bhm",
    name: "Bachelor of Hotel Management (BHM)",
    type: "semester",
    duration: 8,
    structure: [
      {
        id: "1",
        name: "Semester 1",
        subjects: ["Introduction to Hospitality", "Food and Beverage Service I", "English I", "Business Mathematics"],
      },
      {
        id: "2",
        name: "Semester 2",
        subjects: ["Food Production I", "Front Office Operations", "English II", "Accounting for Hospitality"],
      },
      {
        id: "3",
        name: "Semester 3",
        subjects: ["Food and Beverage Service II", "Housekeeping Operations", "Hospitality Marketing", "Elective I"],
      },
      {
        id: "4",
        name: "Semester 4",
        subjects: ["Food Production II", "Hotel Accounting", "Human Resource Management", "Elective II"],
      },
      {
        id: "5",
        name: "Semester 5",
        subjects: ["Event Management", "Tourism Management", "Hospitality Law", "Elective III"],
      },
      {
        id: "6",
        name: "Semester 6",
        subjects: ["Strategic Management in Hospitality", "Food Safety and Hygiene", "Internship I", "Elective IV"],
      },
      {
        id: "7",
        name: "Semester 7",
        subjects: ["Entrepreneurship in Hospitality", "Facility Management", "Project Work", "Elective V"],
      },
      {
        id: "8",
        name: "Semester 8",
        subjects: ["Internship II", "Final Project", "Elective VI"],
      },
    ],
  },
];


  const currentYear = new Date().getFullYear();
  // Placeholder for other data (assuming unchanged)
  export const questionPapersData: QuestionPaper[] = [
    // Existing entries
    { id: "qp1", subject: "Introduction to Information Technology", title: "Introduction to IT - 2022", year: 2022, facultyId: "csit", semesterId: "1", downloadUrl: "https://icseindia.org/document/sample.pdf", uploadedAt: "2022-07-10T10:00:00Z" },
    { id: "qp2", subject: "Programming in C", title: "Programming in C - 2021", year: 2021, facultyId: "csit", semesterId: "1", downloadUrl: "https://example.com/question-paper/c-2021.pdf", uploadedAt: "2021-06-05T12:30:00Z" },
    { id: "qp3", subject: "Database Management Systems", title: "Database Management Systems - 2023", year: 2023, facultyId: "csit", semesterId: "4", downloadUrl: "https://example.com/question-paper/dbms-2023.pdf", uploadedAt: "2023-07-01T14:00:00Z" },
    { id: "qp4", subject: "Human Anatomy", title: "Human Anatomy - 2022", year: 2022, facultyId: "mbbs", semesterId: "1", downloadUrl: "https://example.com/question-paper/anatomy-2022.pdf", uploadedAt: "2022-09-12T09:15:00Z" },
    { id: "qp5", subject: "General Surgery", title: "General Surgery - 2021", year: 2021, facultyId: "mbbs", semesterId: "4", downloadUrl: "https://example.com/question-paper/surgery-2021.pdf", uploadedAt: "2021-06-18T11:30:00Z" },
    { id: "qp6", subject: "Operating Systems", title: "Operating Systems - 2022", year: 2022, facultyId: "bca", semesterId: "3", downloadUrl: "https://example.com/question-paper/os-2022.pdf", uploadedAt: "2022-08-20T11:45:00Z" },
    { id: "qp7", subject: "Java Programming", title: "Java Programming - 2023", year: 2023, facultyId: "bca", semesterId: "5", downloadUrl: "https://example.com/question-paper/java-2023.pdf", uploadedAt: "2023-06-15T14:00:00Z" },
    { id: "qp8", subject: "Cyber Security", title: "Cyber Security - 2023", year: 2023, facultyId: "bca", semesterId: "7", downloadUrl: "https://example.com/question-paper/cyber-security-2023.pdf", uploadedAt: "2023-07-10T10:00:00Z" },
    { id: "qp9", subject: "Financial Accounting", title: "Financial Accounting - 2022", year: 2022, facultyId: "bba", semesterId: "3", downloadUrl: "https://example.com/question-paper/financial-accounting-2022.pdf", uploadedAt: "2022-05-22T11:45:00Z" },
    { id: "qp10", subject: "Investment Analysis", title: "Investment Analysis - 2022", year: 2022, facultyId: "bba", semesterId: "6", downloadUrl: "https://example.com/question-paper/investment-analysis-2022.pdf", uploadedAt: "2022-06-15T14:00:00Z" },
    { id: "qp11", subject: "Machine Learning", title: "Machine Learning - 2023", year: 2023, facultyId: "csit", semesterId: "7", downloadUrl: "https://example.com/question-paper/machine-learning-2023.pdf", uploadedAt: "2023-08-01T10:30:00Z" },
    { id: "qp12", subject: "Data Mining and Warehousing", title: "Data Mining and Warehousing - 2023", year: 2023, facultyId: "csit", semesterId: "7", downloadUrl: "https://example.com/question-paper/data-mining-2023.pdf", uploadedAt: "2023-09-05T09:45:00Z" },
    // New entries

    { id: "qp9", subject: "Financial Accounting", title: "Financial Accounting - 2022", year: 2021, facultyId: "bba", semesterId: "3", downloadUrl: "https://example.com/question-paper/financial-accounting-2022.pdf", uploadedAt: "2022-05-22T11:45:00Z" },
    { id: "qp10", subject: "Investment Analysis", title: "Investment Analysis - 2022", year: 2021, facultyId: "bba", semesterId: "6", downloadUrl: "https://example.com/question-paper/investment-analysis-2022.pdf", uploadedAt: "2022-06-15T14:00:00Z" },
    { id: "qp11", subject: "Machine Learning", title: "Machine Learning - 2023", year: 2019, facultyId: "csit", semesterId: "7", downloadUrl: "https://example.com/question-paper/machine-learning-2023.pdf", uploadedAt: "2023-08-01T10:30:00Z" },
    { id: "qp12", subject: "Data Mining and Warehousing", title: "Data Mining and Warehousing - 2021", year: 2019, facultyId: "csit", semesterId: "7", downloadUrl: "https://example.com/question-paper/data-mining-2023.pdf", uploadedAt: "2023-09-05T09:45:00Z" },







    { id: "qp13", subject: "Engineering Mathematics I", title: "Engineering Mathematics I - 2024", year: 2024, facultyId: "civil-eng", semesterId: "1", downloadUrl: "https://example.com/question-paper/math1-civil-2024.pdf", uploadedAt: "2024-01-15T10:00:00Z" },
    { id: "qp14", subject: "Constitutional Law", title: "Constitutional Law - 2022", year: 2022, facultyId: "llb", semesterId: "1", downloadUrl: "https://example.com/question-paper/constitutional-law-2022.pdf", uploadedAt: "2022-12-10T14:30:00Z" },
    { id: "qp15", subject: "Educational Psychology", title: "Educational Psychology - 2023", year: 2023, facultyId: "bed", semesterId: "1", downloadUrl: "https://example.com/question-paper/edu-psych-2023.pdf", uploadedAt: "2023-06-20T09:15:00Z" },
    { id: "qp16", subject: "Pharmaceutical Chemistry", title: "Pharmaceutical Chemistry - 2021", year: 2021, facultyId: "bpharm", semesterId: "1", downloadUrl: "https://example.com/question-paper/pharm-chem-2021.pdf", uploadedAt: "2021-07-05T11:00:00Z" },
    { id: "qp17", subject: "Circuit Theory", title: "Circuit Theory - 2023", year: 2023, facultyId: "elec-eng", semesterId: "2", downloadUrl: "https://example.com/question-paper/circuit-theory-2023.pdf", uploadedAt: "2023-08-12T13:45:00Z" },
    { id: "qp18", subject: "Epidemiology", title: "Epidemiology - 2022", year: 2022, facultyId: "bph", semesterId: "2", downloadUrl: "https://example.com/question-paper/epidemiology-2022.pdf", uploadedAt: "2022-11-25T10:30:00Z" },
    { id: "qp19", subject: "Sociology", title: "Sociology - 2024", year: 2024, facultyId: "ba", semesterId: "1", downloadUrl: "https://example.com/question-paper/sociology-2024.pdf", uploadedAt: "2024-02-10T12:00:00Z" },
    { id: "qp20", subject: "Introduction to Social Work", title: "Introduction to Social Work - 2023", year: 2023, facultyId: "bsw", semesterId: "1", downloadUrl: "https://example.com/question-paper/social-work-2023.pdf", uploadedAt: "2023-07-15T14:00:00Z" },
    { id: "qp21", subject: "Food and Beverage Service I", title: "Food and Beverage Service I - 2022", year: 2022, facultyId: "bhm", semesterId: "1", downloadUrl: "https://example.com/question-paper/food-beverage-2022.pdf", uploadedAt: "2022-10-05T09:45:00Z" },
    { id: "qp22", subject: "Object-Oriented Programming", title: "Object-Oriented Programming - 2023", year: 2023, facultyId: "csit", semesterId: "2", downloadUrl: "https://example.com/question-paper/oop-2023.pdf", uploadedAt: "2023-09-20T11:30:00Z" },
  ];
  
  export const notesData: Note[] = [
    { id: "note1", subject: "Introduction to Information Technology", title: "IT Notes", facultyId: "csit", semesterId: "1", downloadUrl: "https://example.com/notes/it.pdf", uploadedAt: "2022-08-15T14:30:00Z" },
    { id: "note2", subject: "Digital Logic", title: "Digital Logic Basics", facultyId: "csit", semesterId: "1", downloadUrl: "https://example.com/notes/digital-logic.pdf", uploadedAt: "2021-07-02T16:00:00Z" },
    { id: "note3", subject: "Database Management Systems", title: "DBMS Concepts", facultyId: "csit", semesterId: "4", downloadUrl: "https://example.com/notes/dbms.pdf", uploadedAt: "2022-09-28T09:00:00Z" },
    { id: "note4", subject: "General Medicine", title: "General Medicine Overview", facultyId: "mbbs", semesterId: "4", downloadUrl: "https://example.com/notes/general-medicine.pdf", uploadedAt: "2022-10-10T13:15:00Z" },
    // More entries up to note20...
  ];
  export const revisionMaterialsData: RevisionMaterial[] = [
    { id: "rev1", subject: "Cryptography", title: "Quick Revision - Cryptography", facultyId: "csit", semesterId: "5", downloadUrl: "https://example.com/revision/crypto.pdf", uploadedAt: "2022-11-05T10:45:00Z" },
    { id: "rev2", subject: "Microprocessor", title: "Microprocessor Cheat Sheet", facultyId: "csit", semesterId: "2", downloadUrl: "https://example.com/revision/microprocessor.pdf", uploadedAt: "2022-05-18T08:15:00Z" },
    { id: "rev3", subject: "Forensic Medicine", title: "Forensic Medicine Summary", facultyId: "mbbs", semesterId: "3", downloadUrl: "https://example.com/revision/forensic-medicine.pdf", uploadedAt: "2022-07-30T11:25:00Z" },
    { id: "rev4", subject: "Java Programming", title: "Java Programming Key Notes", facultyId: "bca", semesterId: "5", downloadUrl: "https://example.com/revision/java.pdf", uploadedAt: "2022-09-15T13:40:00Z" },
    { id: "rev5", subject: "Theory of Computation", title: "Theory of Computation Cheat Sheet", facultyId: "csit", semesterId: "4", downloadUrl: "https://example.com/revision/theory-of-computation.pdf", uploadedAt: "2023-04-18T09:30:00Z" },
  ];

  
  // Helper Functions
  export const getQuestionPapers = (facultyId: string, semesterId: string, subject: string): QuestionPaper[] => {
    return questionPapersData
      .filter(paper => paper.facultyId === facultyId && paper.semesterId === semesterId && paper.subject === subject)
      .sort((a, b) => b.year - a.year);
  };
  
  export const getNotes = (facultyId: string, semesterId: string, subject: string): Note[] => {
    return notesData
      .filter(note => note.facultyId === facultyId && note.semesterId === semesterId && note.subject === subject);
  };
  
  export const getRevisionMaterials = (facultyId: string, semesterId: string, subject: string): RevisionMaterial[] => {
    return revisionMaterialsData
      .filter(material => material.facultyId === facultyId && material.semesterId === semesterId && material.subject === subject);
  };