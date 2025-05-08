import { Book } from "@/lib/bookData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Bookmark, BookmarkCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext";

interface BookCardProps {
  book: Book; // Ensure book has a `coverImage: string` field
}

export function BookCard({ book }: BookCardProps) {
  const { isBookFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = isBookFavorite(book.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFromFavorites(book.id);
    } else {
      addToFavorites(book.id);
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        
          <img 
            src="https://cdn.pdfdrive.com/assets/thumbs/c5b/c5bd396671d59ed90dda31f5e50b3918.jpg" 
            alt={book.title} 
            className="w-full h-56 object-cover rounded-md mb-2 "
          />
        
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full" 
            onClick={handleFavoriteToggle}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? 
              <BookmarkCheck className="h-5 w-5 text-primary" /> : 
              <Bookmark className="h-5 w-5" />}
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          {book.author}
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm line-clamp-3">{book.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/books/${book.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            <BookOpen className="mr-2 h-4 w-4" />
            View Book
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
