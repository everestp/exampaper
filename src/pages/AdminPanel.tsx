import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { facultyData } from "@/lib/facultyData";
import { Plus, File, Trash, FileText, BookOpen } from "lucide-react";
import { RootState } from "../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import authService from "@/appwrite/auth.ts";
import { logout1 } from "@/store/authSlice.ts";
import storageService from "@/appwrite/config.ts";
import conf from "@/conf/conf.ts";
import { useData } from "@/contexts/DataContext.tsx";

interface PaperData {
  subject: string;
  title: string;
  year: number | null;
  facultyId: string;
  semesterId: string;
  downloadUrl: string;
  file: File;
}

interface RevisionData {
  subject: string;
  title: string;
  facultyId: string;
  semesterId: string;
  downloadUrl: string;
  file: File;
}

interface NoteData {
  subject: string;
  title: string;
  facultyId: string;
  semesterId: string;
  downloadUrl: string;
  file: File;
}


const AdminPanel = () => {
  const navigate = useNavigate();
  const { status, userData } = useSelector((state: RootState) => state.auth);
  console.log("This is the status", status);
const {noteData ,paperData ,revisionData} = useData()
  // Authentication check
  useEffect(() => {
    if (!status) {
      navigate("/login");
    }
  }, [navigate]);

  // Content type
  const [contentType, setContentType] = useState<string>("papers");

  // Upload form state 
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [semsesterId, setSemesterId] = useState<string>("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedStructure, setSelectedStructure] = useState("");
  const [structures, setStructures] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const dispatch = useDispatch();

  // Handle faculty change
  const handleFacultyChange = (value: string) => {
    setSelectedFaculty(value);
    console.log("This is the selected faculty", selectedFaculty);
    setSelectedStructure("");
    setSubjects([]);

    const faculty = facultyData.find(f => f.id === value);
    if (faculty) {
      const structureOptions = faculty.structure.map(item => item.id);
      setStructures(structureOptions);
    } else {
      setStructures([]);
    }
  };

  // Update subject
  const handleSubject = (value: string) => {
    setSubject(value);
  };

  // Update selected semester
  const handleSemester = (value: string) => {
    setSemesterId(value);
  };

  // Updated semester/structure change handler
  const handleStructureChange = (value: string) => {
    setSelectedStructure(value);
    const faculty = facultyData.find(f => f.id === selectedFaculty);
    if (faculty) {
      const selectedSemester = faculty.structure.find(item => item.id === value);
      setSubjects(selectedSemester?.subjects || []);
    }
  };

  // Available years (last 10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i + 57);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      if (!title) {
        setTitle(e.target.files[0].name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Does data is getting for handle upload", selectedFaculty, selectedFile, selectedYear, subject, subjects, selectedStructure);

    if (contentType === "papers") {
      const file = await storageService.uploadFile(selectedFile);
      console.log("this is the file response after uploading", file);

      if (file) {
        const fileId = file.$id;
        const url = storageService.getFilePreview(fileId);
        const paperData = {
          subject: subject,
          title: title,
          facultyId: selectedFaculty,
          year: parseInt(selectedYear),
          downloadUrl: url,
          semesterId: selectedStructure,
        };
        const response = await storageService.postQuestion(paperData);
        console.log("This is the file Url", url);
        console.log("This is the response after file uploaded create a question and update", response);
      }
    }

    if (contentType === "notes") {
      const file = await storageService.uploadFile(selectedFile);
      console.log("this is the file response after uploading", file);

      if (file) {
        const fileId = file.$id;
        const url = storageService.getFilePreview(fileId);
        const noteData = {
          subject: subject,
          title: title,
          facultyId: selectedFaculty,
          year: null,
          downloadUrl: url,
          semesterId: selectedStructure,
        };
        const response = await storageService.postNote(noteData);
        console.log("This is the file Url", url);
        console.log("This is the response after file uploaded create a question and update", response);
      }
    }

    if (contentType === "revision") {
      const file = await storageService.uploadFile(selectedFile);
      console.log("this is the file response after uploading", file);

      if (file) {
        const fileId = file.$id;
        const url = storageService.getFilePreview(fileId);
        const revisionData = {
          subject: subject,
          title: title,
          facultyId: selectedFaculty,
          year: null,
          downloadUrl: url,
          semesterId: selectedStructure,
        };
        const response = await storageService.postQuestion(revisionData);
        console.log("This is the file Url", url);
        console.log("This is the response after file uploaded create a question and update", response);
      }
    }

    const requiredFields = [selectedFile, selectedFaculty, selectedStructure, subjects.length > 0];
    if (contentType === "papers" && !selectedYear) {
      requiredFields.push(true);
    }

    if (requiredFields.some(field => !field)) {
      toast({
        title: "Missing information",
        description: "Please fill all the required fields",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    setTimeout(() => {
      toast({
        title: "Upload successful",
        description: `"${title}" has been uploaded successfully`,
      });

      setSelectedFile(null);
      setTitle("");
      setSelectedFaculty("");
      setSelectedStructure("");
      setSubjects([]);
      setSelectedYear("");
      setIsUploading(false);
    }, 1500);
  };

  const handleLogout = () => {
    authService.logout();
    dispatch(logout1());
    navigate("/login");
  };

  const handleDeleteContent = (contentId: string, type: string) => {
    toast({
      title: `${type} deleted`,
      description: `The ${type.toLowerCase()} has been deleted successfully`,
    });
  };

  const getContentIcon = () => {
    switch (contentType) {
      case "papers":
        return <File className="h-4 w-4" />;
      case "notes":
        return <BookOpen className="h-4 w-4" />;
      case "revision":
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <Tabs defaultValue="upload">
        <TabsList className="mb-6">
          <TabsTrigger value="upload">Upload Content</TabsTrigger>
          <TabsTrigger value="manage">Manage Content</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload Content</CardTitle>
              <CardDescription>
                Upload new question papers, study notes, and revision materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleUpload}>
                <div className="space-y-4">
                  <div className="flex gap-4 flex-wrap">
                    <Button
                      type="button"
                      variant={contentType === "papers" ? "default" : "outline"}
                      onClick={() => setContentType("papers")}
                      className="flex-1"
                    >
                      <File className="mr-2 h-4 w-4" />
                      Question Papers
                    </Button>
                    <Button
                      type="button"
                      variant={contentType === "notes" ? "default" : "outline"}
                      onClick={() => setContentType("notes")}
                      className="flex-1"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Study Notes
                    </Button>
                    <Button
                      type="button"
                      variant={contentType === "revision" ? "default" : "outline"}
                      onClick={() => setContentType("revision")}
                      className="flex-1"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Revision Materials
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="faculty">Faculty</Label>
                      <Select
                        value={selectedFaculty}
                        onValueChange={handleFacultyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select faculty" />
                        </SelectTrigger>
                        <SelectContent>
                          {facultyData.map((faculty) => (
                            <SelectItem key={faculty.id} value={faculty.id}>
                              {faculty.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="semester">Level</Label>
                      <Select
                        value={selectedStructure}
                        onValueChange={handleStructureChange}
                        disabled={!selectedFaculty}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={`Select ${facultyData.find(f => f.id === selectedFaculty)?.type || 'Level'}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {structures.map((structureId) => {
                            const faculty = facultyData.find(f => f.id === selectedFaculty);
                            const structureItem = faculty?.structure.find(item => item.id === structureId);
                            return (
                              <SelectItem key={structureId} value={structureId}>
                                {structureItem?.name || structureId}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        disabled={!selectedStructure}
                        onValueChange={handleSubject}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject, index) => (
                            <SelectItem key={index} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {contentType === "papers" && (
                      <div className="space-y-2">
                        <Label

 htmlFor="year">Year</Label>
                        <Select
                          value={selectedYear}
                          onValueChange={setSelectedYear}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2 col-span-full">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Content Title"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">File (PDF)</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf"
                        className="flex-1"
                      />
                      {selectedFile && (
                        <div className="text-sm text-muted-foreground">
                          {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" disabled={isUploading} className="mt-4">
                  {isUploading ? "Uploading..." : `Upload ${
                    contentType === "papers" ? "Question Paper" :
                    contentType === "notes" ? "Study Note" : "Revision Material"
                  }`}
                  <Plus className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Content</CardTitle>
              <CardDescription>
                View, edit, and delete existing content
              </CardDescription>
              <div className="flex gap-4 flex-wrap mt-4">
                <Button
                  variant={contentType === "papers" ? "default" : "outline"}
                  onClick={() => setContentType("papers")}
                  size="sm"
                >
                  <File className="mr-2 h-4 w-4" />
                  Question Papers
                </Button>
                <Button
                  variant={contentType === "notes" ? "default" : "outline"}
                  onClick={() => setContentType("notes")}
                  size="sm"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Study Notes
                </Button>
                <Button
                  variant={contentType === "revision" ? "default" : "outline"}
                  onClick={() => setContentType("revision")}
                  size="sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Revision Materials
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Subject</TableHead>
                      {contentType === "papers" && <TableHead>Year</TableHead>}
                      <TableHead>Uploaded</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contentType === "papers" && paperData.map((paper) => (
                      <TableRow key={paper.id}>
                        <TableCell>
                          <a href={paper.downloadUrl} target="_blank" rel="noopener noreferrer">
                            {paper.title}
                          </a>
                        </TableCell>
                        <TableCell>{facultyData.find(f => f.id === paper.facultyId)?.name || paper.facultyId}</TableCell>
                        <TableCell>{paper.semesterId}</TableCell>
                        <TableCell>{paper.subject}</TableCell>
                        <TableCell>{paper.year}</TableCell>
                        <TableCell>{new Date(paper.uploadedAt).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteContent(paper.id, "Question Paper")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {contentType === "notes" && noteData.map((note) => (
                      <TableRow key={note.id}>
                        <TableCell>
                          <a href={note.downloadUrl} target="_blank" rel="noopener noreferrer">
                            {note.title}
                          </a>
                        </TableCell>
                        <TableCell>{facultyData.find(f => f.id === note.facultyId)?.name || note.facultyId}</TableCell>
                        <TableCell>{note.semesterId}</TableCell>
                        <TableCell>{note.subject}</TableCell>
                        <TableCell>{new Date(note.uploadedAt).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteContent(note.id, "Study Note")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {contentType === "revision" && revisionData.map((revision) => (
                      <TableRow key={revision.id}>
                        <TableCell>
                          <a href={revision.downloadUrl} target="_blank" rel="noopener noreferrer">
                            {revision.title}
                          </a>
                        </TableCell>
                        <TableCell>{facultyData.find(f => f.id === revision.facultyId)?.name || revision.facultyId}</TableCell>
                        <TableCell>{revision.semesterId}</TableCell>
                        <TableCell>{revision.subject}</TableCell>
                        <TableCell>{new Date(revision.uploadedAt).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteContent(revision.id, "Revision Material")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;