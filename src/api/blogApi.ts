import { api } from "./axios";
import { ApiResponse } from "@/types/api";
import { BlogPost, BlogListResponse } from "@/types/index";

export const blogApi = {
  getAllPosts: async (params?: { page?: number; limit?: number; category?: string; search?: string }): Promise<BlogListResponse> => {
    const response = await api.get<BlogListResponse>('/blogs', { params });
    return response.data;
  },
  getPostBySlug: async (slug: string): Promise<ApiResponse<BlogPost>> => {
    const response = await api.get<ApiResponse<BlogPost>>(`/blogs/${slug}`);
    return response.data;
  },
  getPostById: async (id: string): Promise<ApiResponse<BlogPost>> => {
    const response = await api.get<ApiResponse<BlogPost>>(`/blogs/id/${id}`);
    return response.data;
  }
};