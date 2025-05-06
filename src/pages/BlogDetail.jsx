import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { api } from '../services/api';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/blog/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div>
            {post === null
                ? <Loading />
                : <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-8">
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">{post.title}</h1>
                    <p className="text-sm text-gray-500 mb-4">By {post.author} • {post.date}</p>
                    <p className="whitespace-pre-line text-gray-800 leading-relaxed">
                        {post.content}
                    </p>
                    <Link to="/blog" className="inline-block mt-6 text-blue-600 hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
            }
        </div>
    );
};

export default BlogDetail;
