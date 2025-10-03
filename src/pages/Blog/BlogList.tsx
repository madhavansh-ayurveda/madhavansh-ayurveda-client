import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { api } from '@/api/axios';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/utils/apiErrorHandler';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  createdAt: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/blogs');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        toast.error(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/blog/${post.slug}`}
            className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <div className="aspect-video relative">
              <img src={`${serverUrl}${post?.featuredImage}`} alt={post.title} className="object-cover w-full h-full"/>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>{post.category.name}</span>
                <span>•</span>
                <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              <div className="mt-4 text-sm text-gray-500">
                By {post.author.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}