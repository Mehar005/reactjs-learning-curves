import { Client, Databases, Query } from "Appwrite";

import { config } from "../config/config";

class PostService {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndPoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost(post) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        post.slug,
        post
      );
    } catch (error) {
      console.log("Appwrite Error :: createPost :: error ", error);
    }
  }

  async updatePost(slug, updatedPost) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        updatedPost
      );
    } catch (error) {
      console.log("Appwrite Error :: updatePost :: error ", error);
    }
  }

  async getPosts(quiries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        quiries
      );
    } catch (error) {
      console.log("Appwrite Error :: getDocuments :: error ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Error :: getDocuments :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Error :: deleteDocument :: error ", error);
    }
  }
}

const postService = new PostService();
export default postService;
