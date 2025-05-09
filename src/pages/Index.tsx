
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {  facultyData } from "@/lib/facultyData";
import { ArrowRight, BookOpen, FileText, GraduationCap } from "lucide-react";
import { useFaculty } from "@/contexts/FacultyContext";

const Index = () => {
  // Get the first 2 semesters for the featured section

  const { selectFaculty ,selectedFaculty} = useFaculty();
  const navigate = useNavigate();
  
  const handleFacultySelect = (facultyId: string) => {
    selectFaculty(facultyId);
    navigate(`/faculty/${facultyId}/semester/1`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-study-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Access Past Question Papers
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your comprehensive archive for the last 10 years of question papers, study notes, and revision materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Selection */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Select Your Faculty</h2>
              <p className="text-muted-foreground">
                Choose your faculty to access relevant study materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {facultyData.map((faculty) => (
                <Card key={faculty.id} className="hover:border-study-300 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-study-100 flex items-center justify-center mb-2">
                      <GraduationCap className="w-6 h-6 text-study-700" />
                    </div>
                    <CardTitle>{faculty.name}</CardTitle>
                    <CardDescription>
                      Access materials for {faculty.name} faculty
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Question papers,  Study notes , Revision materials
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-study-600 hover:bg-study-700"
                      onClick={() => handleFacultySelect(faculty.id)}
                    >
                      Select Faculty
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Resources */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Available Resources</h2>
              <p className="text-muted-foreground">
                Explore our comprehensive collection of study materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card className="hover:border-study-300 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-study-100 flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-study-700" />
                  </div>
                  <CardTitle>Question Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access the last 10 years of question papers for all subjects across all eight semesters.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:border-study-300 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-study-100 flex items-center justify-center mb-2">
                    <BookOpen className="w-6 h-6 text-study-700" />
                  </div>
                  <CardTitle>Study Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive study notes for all subjects to help you understand concepts better.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:border-study-300 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-study-100 flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-study-700" />
                  </div>
                  <CardTitle>Revision Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Last-minute revision guides and summaries to help you prepare for exams efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How It Works</h2>
              <p className="text-muted-foreground">
                Get access to study materials in a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-study-100 text-study-700 font-bold text-xl mb-2">
                    1
                  </div>
                  <CardTitle>Select Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from Medical, Management, or CTEVT faculties
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-study-100 text-study-700 font-bold text-xl mb-2">
                    2
                  </div>
                  <CardTitle>Select Semester</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from eight semesters in the navigation menu
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-study-100 text-study-700 font-bold text-xl mb-2">
                    3
                  </div>
                  <CardTitle>Select Subject</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse through five subjects available for each semester
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-study-100 text-study-700 font-bold text-xl mb-2">
                    4
                  </div>
                  <CardTitle>Access Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Download question papers, notes, or revision materials
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
