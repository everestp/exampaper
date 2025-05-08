import { useState, useEffect } from "react";
import { getAllBooks, getBooksByFaculty, Book } from "@/lib/bookData";
import { BookCard } from "@/components/books/BookCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { facultyData } from "@/lib/data";
import { BookOpen } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { getBookById } from "@/lib/bookData";

export default function BookBrowser() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedFaculty, setSelectedFaculty] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (selectedFaculty === "all") {
      setBooks(getAllBooks());
    } else {
      setBooks(getBooksByFaculty(selectedFaculty));
    }
  }, [selectedFaculty]);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold flex items-center">
            <BookOpen className="mr-2" /> Library
          </h1>
          <p className="text-muted-foreground">
            Browse and read books from our digital library
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setSelectedFaculty("all")}>All Books</TabsTrigger>
              <TabsTrigger value="favorites">My Favorites</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-4">
              <div className="w-[250px]">
                <Label htmlFor="faculty" className="sr-only">Faculty</Label>
                <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by faculty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Faculties</SelectItem>
                    {facultyData.map((faculty) => (
                      <SelectItem key={faculty.id} value={faculty.id}>
                        {faculty.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative w-[250px]">
                <Input
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <TabsContent value="all" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.length > 0 ? (
                filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No books found matching your criteria</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <FavoritesTab searchTerm={searchTerm} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FavoritesTab({ searchTerm }: { searchTerm: string }) {
  const { favorites } = useFavorites();
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    const books = favorites.map(fav => getBookById(fav.bookId)).filter(Boolean) as Book[];
    setFavoriteBooks(books);
  }, [favorites]);

  const filteredBooks = favoriteBooks.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
          <p className="text-muted-foreground">
            Books you add to favorites will appear here for quick access
          </p>
        </div>
      )}
    </div>
  );
}

// Import at the top of the file

