import conf from "@/conf/conf";
import { Client, Account, ID, Databases, Storage } from "appwrite";

export class StorageService {
  private client: Client;
  private databases: Databases;
  private bucket: Storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async postQuestion({
    subject,
    title,
    year,
    facultyId,
    semesterId,
    downloadUrl,
  }: {
    subject: string;
    title: string;
    year: number;
    facultyId: string;
    semesterId: string;
    downloadUrl: string;
  }): Promise<any> {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteQuestionCollectionId, // Corrected collection ID
        ID.unique(),
        {
          subject,
          title,
          year,
          facultyId,
          semesterId,
          downloadUrl,
        }
      );
    } catch (error) {
      console.error("Error posting question:", error);
      throw error;
    }
  }

  async postRevision({
    subject,
    title,
    facultyID,
    semesterId,
    downloadUrl,
  }: {
    subject: string;
    title: string;
    facultyID: string;
    semesterId: string;
    downloadUrl: string;
  }): Promise<any> {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteRevisionCollectionId,
        ID.unique(),
        {
          subject,
          title,
          facultyID,
          semesterId,
          downloadUrl,
        }
      );
    } catch (error) {
      console.error("Error posting revision:", error);
      throw error;
    }
  }

  async postNote({
    subject,
    title,
    facultyID,
    semesterId,
    downloadUrl,
  }: {
    subject: string;
    title: string;
    facultyID: string;
    semesterId: string;
    downloadUrl: string;
  }): Promise<any> {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNoteCollectionId,
        ID.unique(),
        {

          subject,
          title,
          facultyID,
          semesterId,
          downloadUrl,
        }
      );
    } catch (error) {
      console.error("Error posting note:", error);
      throw error;
    }
  }

  async uploadFile(file: File): Promise<any> {
    try {
      return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  async deleteFile(fileId: string): Promise<boolean> {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      return false;
    }
  }

  getFilePreview(fileId: string): string {
    return this.bucket.getFileView(conf.appwriteBucketId, fileId);
  }

   async getPaper(){
try {
 const questionPaperData = await this.databases.listDocuments(conf.appwriteDatabaseId ,conf.appwriteQuestionCollectionId)
 console.log("Thsi is th epapert data fro, cionf",questionPaperData)
 return questionPaperData.documents
} catch (error) {
    console.log("Error fetching data",error)
}
   }
   async getNote(){
    try {
     const questionPaperData = await this.databases.listDocuments(conf.appwriteDatabaseId ,conf.appwriteNoteCollectionId)
     console.log("Thsi is th epapert data fro, cionf",questionPaperData)
     return questionPaperData.documents
    } catch (error) {
        console.log("Error fetching data",error)
    }
       }

       async getRevision(){
        try {
         const questionPaperData = await this.databases.listDocuments(conf.appwriteDatabaseId ,conf.appwriteRevisionCollectionId)
         console.log("Thsi is th epapert data fro, cionf",questionPaperData)
         return questionPaperData.documents
        } catch (error) {
            console.log("Error fetching data",error)
        }
           }
}

const storageService = new StorageService();
export default storageService;