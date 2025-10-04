import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/utils/apiErrorHandler';
import { blogApi } from '@/api/blogApi';
import { BlogPost as BlogPostType } from '@/types';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        const response = await blogApi.getPostBySlug(slug);
        if (response.success) {
          setPost(response.data);
        } else {
          throw new Error(response.message || 'Failed to fetch post');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        toast.error(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-8" />
        <Skeleton className="h-96 w-full mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 py-8 text-center">Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>By {post.author.name}</span>
          <span>•</span>
          <span>{post.category.name}</span>
          <span>•</span>
          <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
        </div>
      </header>

      {post.featuredImage && (
        <img
          src={`${serverUrl}${post.featuredImage}`}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}