interface Semester {
    id: string;
    name: string;
    subjects: string[];
  }
  
  export interface Faculty {
    id: string;
    name: string;
    type: "semester" | "year";
    duration: number;
    structure: Semester[];  // Changed from String[] to Semester[]
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
          subjects: ["Introduction to Information Technology", "Programming in C", "Digital Logic", "Mathematics I"] 
        },
        { 
          id: "2", 
          name: "Semester 2", 
          subjects: ["Object-Oriented Programming", "Microprocessor", "Discrete Structures", "Mathematics II"] 
        },
        { 
          id: "3", 
          name: "Semester 3", 
          subjects: ["Data Structures and Algorithms", "Numerical Methods", "Computer Architecture", "Computer Graphics"] 
        },
        { 
          id: "4", 
          name: "Semester 4", 
          subjects: ["Database Management Systems", "Computer Networks", "Artificial Intelligence", "Theory of Computation"] 
        },
        { 
          id: "5", 
          name: "Semester 5", 
          subjects: ["Software Engineering", "Web Technology", "Cryptography", "Simulation and Modeling"] 
        },
        { 
          id: "6", 
          name: "Semester 6", 
          subjects: ["Information Security", "Multimedia Systems", "Distributed Systems", "Applied Mathematics"] 
        },
        { 
          id: "7", 
          name: "Semester 7", 
          subjects: ["Data Mining and Warehousing", "Network Security", "Mobile Computing", "Project Work"] 
        },
        { 
          id: "8", 
          name: "Semester 8", 
          subjects: ["Internship", "Elective IV", "Final Project"]  
        }
      ],
    },
    // Add other faculties here following the same structure
  ];