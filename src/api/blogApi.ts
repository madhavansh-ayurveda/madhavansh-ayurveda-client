import { api } from "./axios";
import { ApiResponse } from "@/types/api";
import { BlogPost, BlogListResponse } from "@/types/index";

interface BlogListApiResponse extends ApiResponse<BlogListResponse> {}
interface BlogPostApiResponse extends ApiResponse<BlogPost> {}

export const blogApi = {
  getAllPosts: async (params?: { page?: number; limit?: number; category?: string; search?: string }): Promise<BlogListApiResponse> => {
    const response = await api.get<BlogListApiResponse>('/blogs', { params });
    return response.data;
  },
  getPostBySlug: async (slug: string): Promise<BlogPostApiResponse> => {
    const response = await api.get<BlogPostApiResponse>(`/blogs/${slug}`);
    return response.data;
  },
  getPostById: async (id: string): Promise<BlogPostApiResponse> => {
    const response = await api.get<BlogPostApiResponse>(`/blogs/id/${id}`);
    return response.data;
  }
};