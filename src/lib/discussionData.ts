import { facultyData } from "./data";

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  facultyId: string;
  subjectId: string;
  createdAt: string;
  upvotes: number;
  commentCount: number;
  tags: string[];
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  upvotes: number;
}

// Sample data
export const discussionPosts: Post[] = [
  {
    id: "post1",
    title: "Understanding RNA Transcription in Eukaryotes",
    content: "I'm having difficulty understanding the difference between transcription in prokaryotes versus eukaryotes. Can someone explain the key differences and how RNA processing works in eukaryotic cells?",
    authorId: "user1",
    authorName: "Dr. Smith",
    facultyId: "medical",
    subjectId: "1-sub-2",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 24,
    commentCount: 5,
    tags: ["Biology", "Molecular Biology", "Cellular Processes"]
  },
  {
    id: "post2",
    title: "Solving Differential Equations in Fluid Dynamics",
    content: "What are the best approaches to solving non-linear differential equations that appear in fluid dynamics problems? I'm specifically looking at Navier-Stokes equations for a project.",
    authorId: "user2",
    authorName: "Jane Chen",
    facultyId: "management",
    subjectId: "2-sub-1",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 15,
    commentCount: 7,
    tags: ["Mathematics", "Differential Equations", "Fluid Dynamics"]
  },
  {
    id: "post3",
    title: "Clinical Diagnosis of Respiratory Conditions",
    content: "I'm studying different approaches to clinical diagnosis of respiratory conditions. Has anyone compiled resources on distinguishing between similar presenting symptoms in asthma, COPD, and bronchitis?",
    authorId: "user3",
    authorName: "Michael Johnson",
    facultyId: "medical",
    subjectId: "1-sub-3",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 32,
    commentCount: 12,
    tags: ["Clinical Medicine", "Respiratory", "Diagnosis"]
  },
  {
    id: "post4",
    title: "Digital Signal Processing Filter Design",
    content: "I'm working on designing a bandpass filter for audio processing. What algorithms or approaches would you recommend for optimizing the filter coefficients?",
    authorId: "user4",
    authorName: "Sarah Williams",
    facultyId: "ctevt",
    subjectId: "3-sub-3",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 8,
    commentCount: 4,
    tags: ["Signal Processing", "Audio Engineering", "Filter Design"]
  },
  {
    id: "post5",
    title: "Project Management for Healthcare Systems",
    content: "I'm researching project management methodologies specifically tailored for healthcare systems implementation. Has anyone successfully applied agile methods in hospital settings?",
    authorId: "user5",
    authorName: "Robert Garcia",
    facultyId: "management",
    subjectId: "2-sub-4",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 19,
    commentCount: 9,
    tags: ["Project Management", "Healthcare", "Agile"]
  }
];

export const discussionComments: Comment[] = [
  {
    id: "comment1",
    postId: "post1",
    content: "The main difference is that eukaryotic transcription occurs in the nucleus and the pre-mRNA transcript undergoes extensive processing including splicing, 5' capping, and 3' polyadenylation before being transported to the cytoplasm for translation.",
    authorId: "user6",
    authorName: "Prof. Thompson",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 15
  },
  {
    id: "comment2",
    postId: "post1",
    content: "I'd also add that eukaryotes have three RNA polymerases (I, II, and III) whereas prokaryotes have only one. RNA polymerase II is responsible for mRNA synthesis in eukaryotes.",
    authorId: "user7",
    authorName: "Lisa Chen",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 10
  },
  {
    id: "comment3",
    postId: "post2",
    content: "For Navier-Stokes equations, finite element methods are quite effective. You might want to look into spectral methods as well for certain fluid dynamics problems.",
    authorId: "user8",
    authorName: "Dr. Roberts",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    upvotes: 7
  }
];

// Helper functions
export function getPostsByFaculty(facultyId: string): Post[] {
  return discussionPosts.filter(post => post.facultyId === facultyId);
}

export function getPostById(postId: string): Post | undefined {
  return discussionPosts.find(post => post.id === postId);
}

export function getCommentsByPostId(postId: string): Comment[] {
  return discussionComments.filter(comment => comment.postId === postId);
}

export function getFacultyName(facultyId: string): string {
  const faculty = facultyData.find(f => f.id === facultyId);
  return faculty ? faculty.name : 'Unknown Faculty';
}
