import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/utils/apiErrorHandler';
import { blogApi } from '@/api/blogApi';
import { BlogPost as BlogPostType } from '@/types';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>
        <Skeleton className="h-96 w-full mb-8 rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <p className="mt-2 text-gray-600">The post you are looking for does not exist.</p>
        <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
        <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <header className="mb-8 border-b pb-8">
            <div className="text-sm text-primary font-semibold mb-2">{post.category.name}</div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.createdAt), 'MMMM d, yyyy')}</span>
              </div>
            </div>
          </header>

          {post.featuredImage && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={`${serverUrl}${post.featuredImage}`}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-8"
            />
          )}

          <div
            className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 && (
            <footer className="mt-10 pt-8 border-t">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-gray-500" />
                <h3 className="font-semibold">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          )}
        </article>
      </div>
    </motion.div>
  );
}