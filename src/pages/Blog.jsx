import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { api } from '../services/api';


const Blog = () => {
    const navigate = useNavigate()
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await api.get('/blog');
                const data = response.data;
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }
        fetchBlogPosts();
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Blog</h1>
            <div className="max-w-3xl mx-auto space-y-6">
                {blogPosts.length === 0 ? (<Loading />) : (
                    blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-2xl font-semibold text-blue-700">{post.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">
                                By {post.author} • {post.date}
                            </p>
                            <p className="text-gray-700">{post.excerpt}</p>
                            <button
                                className="mt-4 text-blue-600 hover:underline"
                                onClick={() => navigate(`/blog/${post.id}`, { state: { post } })}
                            >
                                Read more →
                            </button>
                        </div>
                    )))}
            </div>
        </div>
    );
};

export default Blog;
