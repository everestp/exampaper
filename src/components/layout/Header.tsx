
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Search, Book, FileText } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { useFaculty } from "@/contexts/FacultyContext";
import { cn } from "@/lib/utils";

export function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { selectedFaculty } = useFaculty();
  const params = useParams();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowMobileNav(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="hidden md:flex">
              <span className="font-bold text-xl text-study-700">exampaper</span>
              <span className="text-xl text-muted-foreground">.org</span>
            </div>
            <div className="md:hidden">
              <span className="font-bold text-xl text-study-700">SH</span>
              <span className="text-xl text-muted-foreground">A</span>
            </div>
          </Link>
        </div>
        
        {selectedFaculty && (
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Question Papers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((semesterNum) => (
                        <li key={semesterNum}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/faculty/${selectedFaculty.id}/semester/${semesterNum}`}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                params.semesterId === String(semesterNum) && "bg-accent"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">Semester {semesterNum}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Access question papers for semester {semesterNum}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Study Notes</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((semesterNum) => (
                        <li key={semesterNum}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/faculty/${selectedFaculty.id}/notes/semester/${semesterNum}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Semester {semesterNum}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Access study notes for semester {semesterNum}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Revision Materials</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((semesterNum) => (
                        <li key={semesterNum}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/faculty/${selectedFaculty.id}/revision/semester/${semesterNum}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Semester {semesterNum}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Access last-minute revision materials for semester {semesterNum}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md">
              <span className="text-sm text-muted-foreground">Faculty:</span>
              <span className="text-sm font-medium">{selectedFaculty.name}</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm">Admin</Button>
          </Link>
        </div>
      </div>
      
      <MobileNav 
        isOpen={showMobileNav} 
        onClose={() => setShowMobileNav(false)} 
      />
    </header>
  );
}
