type AppwriteConfig = {
    appwriteUrl: string;
    appwriteProjectId: string;
    appwriteDatabaseId: string;
    appwriteQuestionCollectionId: string;
    appwriteNoteCollectionId: string;
    appwriteRevisionCollectionId: string;
    appwriteBucketId: string;
  };
  
  const conf: AppwriteConfig = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteQuestionCollectionId: String(import.meta.env.VITE_APPWRITE_QUESTION_COLLECTION_ID),
    appwriteNoteCollectionId: String(import.meta.env.VITE_APPWRITE_NOTE_COLLECTION_ID),
    appwriteRevisionCollectionId: String(import.meta.env.VITE_APPWRITE_REVISION_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  };
  
  export default conf;