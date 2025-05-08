export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    coverUrl: string;
    pdfUrl: string;
    facultyId: string;
    subjectId: string;
    pages: number;
    publicationYear: number;
  }
  
  export interface Favorite {
    bookId: string;
    addedAt: string;
  }
  
  // Mock book data
  export const booksData: Book[] = [
    // Medical Books
    {
      id: "med-anatomy-1",
      title: "Human Anatomy Fundamentals",
      author: "Dr. Maria Johnson",
      description: "A comprehensive guide to human anatomical structures and their functions. This book provides detailed illustrations and explanations of the human body systems.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "medical",
      subjectId: "1-sub-1",
      pages: 432,
      publicationYear: 2021
    },
    {
      id: "med-physiology-1",
      title: "Principles of Human Physiology",
      author: "Dr. Robert Chen",
      description: "This book explores the fundamental mechanisms and processes of the human body, from cellular functions to organ systems interactions.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "medical",
      subjectId: "1-sub-2",
      pages: 512,
      publicationYear: 2020
    },
    {
      id: "med-pharmacology-1",
      title: "Clinical Pharmacology",
      author: "Dr. Sarah Wilson",
      description: "A comprehensive textbook on drug actions, interactions, and clinical applications. Essential for medical students and practitioners.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "medical",
      subjectId: "2-sub-3",
      pages: 648,
      publicationYear: 2022
    },
    
    // Management Books
    {
      id: "mgmt-finance-1",
      title: "Corporate Finance Fundamentals",
      author: "Prof. James Peterson",
      description: "This book covers the essential principles of financial management, capital budgeting, and investment analysis for business students.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "management",
      subjectId: "3-sub-4",
      pages: 386,
      publicationYear: 2019
    },
    {
      id: "mgmt-marketing-1",
      title: "Strategic Marketing Management",
      author: "Prof. Emily Thompson",
      description: "A detailed study of marketing strategies, consumer behavior, and brand management in competitive business environments.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "management",
      subjectId: "3-sub-5",
      pages: 412,
      publicationYear: 2021
    },
    
    // CTEVT Books
    {
      id: "ctevt-electrical-1",
      title: "Electrical Engineering Principles",
      author: "Eng. Michael Brown",
      description: "Covers the fundamental concepts and applications of electrical engineering for technical education students.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "ctevt",
      subjectId: "5-sub-1",
      pages: 328,
      publicationYear: 2020
    },
    {
      id: "ctevt-mechanical-1",
      title: "Mechanical Design Fundamentals",
      author: "Eng. David Lee",
      description: "Introduction to mechanical engineering design principles, material properties, and manufacturing processes.",
      coverUrl: "/placeholder.svg",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      facultyId: "ctevt",
      subjectId: "5-sub-2",
      pages: 356,
      publicationYear: 2022
    }
  ];
  
  // Helper functions
  export const getBooksByFacultyAndSubject = (facultyId: string, subjectId: string): Book[] => {
    return booksData.filter(book => book.facultyId === facultyId && book.subjectId === subjectId);
  };
  
  export const getBooksByFaculty = (facultyId: string): Book[] => {
    return booksData.filter(book => book.facultyId === facultyId);
  };
  
  export const getBookById = (bookId: string): Book | undefined => {
    return booksData.find(book => book.id === bookId);
  };
  
  export const getAllBooks = (): Book[] => {
    return booksData;
  };
  