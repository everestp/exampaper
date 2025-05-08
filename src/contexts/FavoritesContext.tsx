import React, { createContext, useState, useContext, useEffect } from "react";
import { Favorite } from "@/lib/bookData";

interface FavoritesContextType {
  favorites: Favorite[];
  addToFavorites: (bookId: string) => void;
  removeFromFavorites: (bookId: string) => void;
  isBookFavorite: (bookId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("bookFavorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error("Failed to parse favorites from localStorage", e);
        localStorage.removeItem("bookFavorites");
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (bookId: string) => {
    if (!isBookFavorite(bookId)) {
      const newFavorite: Favorite = {
        bookId,
        addedAt: new Date().toISOString()
      };
      setFavorites([...favorites, newFavorite]);
    }
  };

  const removeFromFavorites = (bookId: string) => {
    setFavorites(favorites.filter(fav => fav.bookId !== bookId));
  };

  const isBookFavorite = (bookId: string) => {
    return favorites.some(fav => fav.bookId === bookId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isBookFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
