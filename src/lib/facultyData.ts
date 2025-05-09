interface CourseStructure {
    [key: string]: string[];
  }
  
  export interface Faculty {
    id: string;
    name: string;
    type: "semester" | "year";
    duration: number; // Ensure duration is included
    structure: CourseStructure;
  }
  
  export const facultyData: Faculty[] = [
    {
      id: "bsc-csit",
      name: "BSc CSIT",
      type: "semester",
      duration: 8,
      structure: {
        semester1: ["Introduction to Information Technology", "Programming in C", "Digital Logic", "Mathematics I"],
        semester2: ["Object-Oriented Programming", "Microprocessor", "Discrete Structures", "Mathematics II"],
        semester3: ["Data Structures and Algorithms", "Numerical Methods", "Computer Architecture", "Computer Graphics"],
        semester4: ["Database Management Systems", "Computer Networks", "Artificial Intelligence", "Theory of Computation"],
        semester5: ["Software Engineering", "Web Technology", "Cryptography", "Simulation and Modeling"],
        semester6: ["Information Security", "Multimedia Systems", "Distributed Systems", "Applied Mathematics"],
        semester7: ["Data Mining and Warehousing", "Network Security", "Mobile Computing", "Project Work"],
        semester8: ["Internship", "Elective IV", "Final Project"],
      },
    },
    {
      id: "mbbs",
      name: "MBBS",
      type: "year",
      duration: 5.5,
      structure: {
        year1: ["Human Anatomy", "Physiology", "Biochemistry"],
        year2: ["Pathology", "Pharmacology", "Microbiology"],
        year3: ["Forensic Medicine", "Community Medicine", "Ophthalmology"],
        year4: ["General Medicine", "General Surgery", "Pediatrics", "Obstetrics and Gynecology"],
        year5: ["Internship"],
      },
    },
    {
      id: "bca",
      name: "BCA",
      type: "semester",
      duration: 8,
      structure: {
        semester1: ["Computer Fundamentals", "Programming in C", "Mathematics I", "English I"],
        semester2: ["Data Structures", "Digital Logic", "Database Management Systems", "Mathematics II"],
        semester3: ["Operating Systems", "Computer Networks", "Software Engineering", "Financial Accounting"],
        semester4: ["Web Technology", "Artificial Intelligence", "Mobile Application Development", "Statistics"],
        semester5: ["Java Programming", "System Analysis and Design", "Computer Organization", "English II"],
        semester6: ["Cloud Computing", "Data Mining", "Project I", "Management Information Systems"],
        semester7: ["Cyber Security", "E-Commerce", "Elective I", "Network Administration"],
        semester8: ["Internship", "Final Project", "Elective II"],
      },
    },
    {
      id: "bba",
      name: "BBA",
      type: "semester",
      duration: 8,
      structure: {
        semester1: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Mathematics"],
        semester2: ["Business Communication", "Organizational Behavior", "Marketing Management", "Business Statistics"],
        semester3: ["Human Resource Management", "Financial Management", "Business Law", "Cost Accounting"],
        semester4: ["Strategic Management", "Entrepreneurship", "International Business", "Management Information Systems"],
        semester5: ["Operations Management", "Business Ethics", "Project Management", "Elective I"],
        semester6: ["Strategic Marketing", "Investment Analysis", "Research Methodology", "Elective II"],
        semester7: ["Supply Chain Management", "Corporate Governance", "Elective III", "Project Work"],
        semester8: ["Internship", "Final Project", "Elective IV"],
      },
    },
    {
      id: "civil-eng",
      name: "Bachelor of Civil Engineering",
      type: "semester",
      duration: 8,
      structure: {
        semester1: ["Engineering Mathematics I", "Engineering Mechanics", "Engineering Drawing", "Basic Electrical Engineering"],
        semester2: ["Engineering Mathematics II", "Concrete Technology", "Hydraulics", "Engineering Physics"],
        semester3: ["Geotechnical Engineering", "Transportation Engineering", "Building Materials", "Engineering Mathematics III"],
        semester4: ["Water Resources Engineering", "Construction Management", "Environmental Engineering", "Strength of Materials"],
        semester5: ["Structural Analysis I", "Fluid Mechanics", "Surveying", "Engineering Geology"],
        semester6: ["Structural Analysis II", "Irrigation Engineering", "Design of Steel Structures", "Elective I"],
        semester7: ["Earthquake Engineering", "Project Engineering", "Design of RCC Structures", "Elective II"],
        semester8: ["Final Project", "Internship", "Elective III"],
      },
    },
    {
      id: "llb",
      name: "Bachelor of Law (LLB)",
      type: "year",
      duration: 3,
      structure: {
        year1: ["Jurisprudence and Legal System", "Constitutional Law", "Contract Law"],
        year2: ["Criminal Law", "Corporate Law", "International Law"],
        year3: ["Human Rights Law", "Legal Research and Writing", "Judicial Process"],
      },
    },
    {
      id: "bed",
      name: "Bachelor of Education (BEd)",
      type: "year",
      duration: 4,
      structure: {
        year1: ["Educational Psychology", "Curriculum Development", "Teaching Methods", "English Communication"],
        year2: ["Educational Technology", "Assessment and Evaluation", "Subject-Specific Pedagogy", "Sociology of Education"],
        year3: ["Educational Administration", "Guidance and Counseling", "Inclusive Education", "Environmental Education"],
        year4: ["Teaching Practice", "Research in Education", "Elective Subject", "Educational Planning"],
      },
    },
    {
      id: "bpharm",
      name: "Bachelor of Pharmacy (BPharm)",
      type: "year",
      duration: 4,
      structure: {
        year1: ["Pharmaceutical Chemistry", "Human Anatomy and Physiology", "Pharmaceutics I", "Pharmacognosy I"],
        year2: ["Pharmacology I", "Pharmaceutical Microbiology", "Pharmaceutics II", "Pharmaceutical Analysis"],
        year3: ["Pharmacology II", "Medicinal Chemistry", "Pharmacognosy II", "Hospital Pharmacy"],
        year4: ["Clinical Pharmacy", "Pharmaceutical Management", "Internship", "Biopharmaceutics"],
      },
    },
    {
      id: "elec-eng",
      name: "Bachelor of Electrical Engineering",
      type: "semester",
      duration: 8,
      structure: {
        semester1: ["Engineering Mathematics I", "Basic Electrical Engineering", "Engineering Drawing", "Computer Programming"],
        semester2: ["Engineering Mathematics II", "Circuit Theory", "Engineering Physics", "Electronics I"],
        semester3: ["Engineering Mathematics III", "Electromagnetic Fields", "Electrical Machines I", "Digital Electronics"],
        semester4: ["Power Systems I", "Control Systems", "Microprocessors", "Signals and Systems"],
        semester5: ["Electrical Machines II", "Power Electronics", "Instrumentation", "Elective I"],
        semester6: ["Power Systems II", "Communication Systems", "Embedded Systems", "Elective II"],
        semester7: ["Renewable Energy Systems", "High Voltage Engineering", "Project Work", "Elective III"],
        semester8: ["Final Project", "Internship", "Elective IV"],
      },
    },
    {
      id: "bph",
      name: "Bachelor of Public Health (BPH)",
      type: "year",
      duration: 4,
      structure: {
        year1: ["Introduction to Public Health", "Human Anatomy and Physiology", "Biostatistics", "Environmental Health"],
        year2: ["Epidemiology", "Health Promotion and Education", "Nutrition", "Community Health"],
        year3: ["Health Policy and Management", "Research Methodology", "Occupational Health", "Maternal and Child Health"],
        year4: ["Internship", "Public Health Project", "Global Health", "Health Economics"],
      },
    },
    {
      id: "ba",
      name: "Bachelor of Arts (BA)",
      type: "year",
      duration: 3,
      structure: {
        year1: ["Sociology", "English Literature", "Nepali", "Major Elective I"],
        year2: ["Political Science", "History", "Economics", "Major Elective II"],
        year3: ["Cultural Studies", "Research Methodology", "Major Elective III", "Project Work"],
      },
    },
  ];
  const currentYear = new Date().getFullYear();
  // Placeholder for other data (assuming unchanged)
  export const questionPapersData = [];
  export const notesData = [];
  export const revisionMaterialsData = [];