import storageService from "@/appwrite/config";
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
export const DataContext = createContext(null);

// Create Provider Component
export const DataContextProvider = ({ children }) => {
  const [paperData, setPaperData] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [revisionData, setRevisionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPaper = async () => {
    try {
      const response = await storageService.getPaper();
      setPaperData(response);
    } catch (error) {
      console.error("Error fetching Paper Data", error);
    }
  };

  const getNote = async () => {
    try {
      const response = await storageService.getNote();
      setNoteData(response);
    } catch (error) {
      console.error("Error fetching Note Data", error);
    }
  };

  const getRevision = async () => {
    try {
      const response = await storageService.getRevision();
      setRevisionData(response);
    } catch (error) {
      console.error("Error fetching Revision Data", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getPaper(), getNote(), getRevision()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  const contextValue = {
    paperData,
    revisionData,
    noteData,
    setPaperData,
    setNoteData,
    setRevisionData,
    loading,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook
export const useData = () => useContext(DataContext);