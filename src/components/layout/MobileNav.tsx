
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { semesterData } from "@/lib/data";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <div className="flex items-center justify-between pr-4">
          <Link to="/" onClick={onClose} className="flex items-center ">
            <span className="font-bold text-xl text-study-700">exampaper</span>
            <span className="text-xl text-muted-foreground">.org</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col gap-2 pr-6">
            {semesterData.map((semester) => (
              <div key={semester.id} className="flex flex-col gap-1">
                <Link 
                  to={`/semester/${semester.id}`} 
                  onClick={onClose}
                  className="font-medium text-lg py-2 hover:text-study-700"
                >
                  {semester.name}
                </Link>
              </div>
            ))}
            <div className="mt-6">
              <Link 
                to="/admin" 
                onClick={onClose} 
                className="font-medium text-lg py-2 text-study-700"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
