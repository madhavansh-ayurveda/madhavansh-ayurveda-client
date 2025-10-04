import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/utils/apiErrorHandler';
import { blogApi } from '@/api/blogApi';
import { BlogPost } from '@/types';
import { motion, useInView } from 'framer-motion';
import { Loader2, BookOpen } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={post?.featuredImage}
            alt={post.title}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>{post.category.name}</span>
            <span>•</span>
            <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors flex-grow">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="mt-auto text-sm font-medium text-primary group-hover:underline flex items-center">
            Read More
            <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);
  const inView = useInView(loadMoreRef, { margin: "200px" });

  const fetchPosts = useCallback(async (pageNum: number) => {
    if (pageNum === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    try {
      const response = await blogApi.getAllPosts({ page: pageNum, limit: 6 });
      if (response.success && Array.isArray(response.data)) {
        setPosts((prevPosts) => pageNum === 1 ? response.data : [...prevPosts, ...response.data]);
        setTotalPages(response.totalPages);
      } else {
        throw new Error(response.message || 'Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(1);
  }, [fetchPosts]);

  useEffect(() => {
    if (inView && !loading && !loadingMore && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading, loadingMore, page, totalPages]);

  useEffect(() => {
    if (page > 1) {
      fetchPosts(page);
    }
  }, [page, fetchPosts]);

  if (loading && page === 1) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-900"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Insights on Ayurveda, wellness tips, and healthy living from our experts.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-900"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Insights on Ayurveda, wellness tips, and healthy living from our experts.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <div ref={loadMoreRef} className="mt-12 flex justify-center items-center h-16">
          {loadingMore && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          {!loadingMore && page >= totalPages && posts.length > 0 && (
            <div className="text-center text-gray-500 flex flex-col items-center">
              <BookOpen className="h-8 w-8 mb-2" />
              <p>You've reached the end of our blog.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}