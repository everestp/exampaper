import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById, Book } from "@/lib/bookData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ChevronLeft, BookmarkCheck, Bookmark } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import PDFViewer from "@/components/books/PDFViewer";
import { facultyData, semesterData } from "@/lib/data";

export default function BookDetails() {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const { isBookFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    if (bookId) {
      const foundBook = getBookById(bookId);
      setBook(foundBook || null);
      setLoading(false);
    }
  }, [bookId]);

  const isFavorite = book ? isBookFavorite(book.id) : false;

  const handleFavoriteToggle = () => {
    if (!book) return;
    
    if (isFavorite) {
      removeFromFavorites(book.id);
    } else {
      addToFavorites(book.id);
    }
  };

  // Find faculty and subject names
  const faculty = book ? facultyData.find(f => f.id === book.facultyId)?.name : "";
  let subjectName = "";
  
  if (book) {
    for (const semester of semesterData) {
      const subject = semester.subjects.find(s => s.id === book.subjectId);
      if (subject) {
        subjectName = subject.name;
        break;
      }
    }
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h2 className="text-xl font-bold mb-2">Book Not Found</h2>
          <p className="text-muted-foreground mb-4">The book you're looking for doesn't exist or has been removed.</p>
          <Link to="/books">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Library
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link to="/books">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{book.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <img
                  src={book.coverUrl}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-[300px] object-cover mb-4 rounded-md bg-muted"
                />
                <Button
                  className="w-full"
                  onClick={handleFavoriteToggle}
                >
                  {isFavorite ? (
                    <>
                      <BookmarkCheck className="mr-2 h-4 w-4" />
                      Remove from Favorites
                    </>
                  ) : (
                    <>
                      <Bookmark className="mr-2 h-4 w-4" />
                      Add to Favorites
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Author</h3>
                  <p>{book.author}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Faculty</h3>
                  <p>{faculty}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Subject</h3>
                  <p>{subjectName}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Publication Year</h3>
                  <p>{book.publicationYear}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Pages</h3>
                  <p>{book.pages}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardContent className="p-6 h-full">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{book.description}</p>
              </div>
              
              <div className="h-[600px] border rounded overflow-hidden">
                <PDFViewer pdfUrl={book.pdfUrl} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
