import { Storage, Client, ID } from "Appwrite";
import { config } from "../config/config";

class FileService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndPoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.storage = new Storage(this.client);
  }

  async createFile(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Error :: createFile :: error ", error);
    }
  }

  async getFile(fileId) {
    try {
      return await this.storage.createFile(config.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Error :: getFile :: error ", error);
    }
  }

  async updateFile(fileId, file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        fileId,
        file
      );
    } catch (error) {
      console.log("Appwrite Error :: updateFile :: error ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(config.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Error :: deleteFile :: error ", error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Error :: getFilePreview :: error ", error);
    }
  }
}

const fileService = FileService();
export default fileService;
