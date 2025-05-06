import { useState } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export default function AddBlog() {
    const [posts, setPosts] = useState([]);
    const { user } = useAuthContext()
    const [popupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        excerpt: '',
        content: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            author: user.name,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            ...form,
        };
        setPosts([newPost, ...posts]);
        console.log('New Post:', newPost);
        try {
            const response = await api.post('/blog', newPost);
            if (response.status === 200) {
                setPopupVisible(true);
            }

        } catch (err) {
            console.error('Error creating blog post:', err);
            alert('Error creating blog post. Please try again.');
        }

        setForm({
            title: '',
            excerpt: '',
            content: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            {popupVisible && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm text-center shadow-xl">
                        <h2 className="text-xl font-semibold text-green-600 mb-4">🎉 Blog Post Published!</h2>
                        <p className="mb-6 text-gray-700">Your new blog post has been successfully created.</p>
                        <div className="flex justify-around">
                            <button
                                onClick={() => setPopupVisible(false)}
                                className="w-35 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                            >
                                OK
                            </button>
                            <button
                                onClick={() => navigate('/blog')}
                                className="w-35 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                View Post List
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
                    <h2 className="text-2xl font-semibold mb-6">Create New Blog Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Post Title"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="excerpt"
                            value={form.excerpt}
                            onChange={handleChange}
                            placeholder="Excerpt"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="Content"
                            rows={6}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Publish Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

