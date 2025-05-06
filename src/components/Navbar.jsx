import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuthContext()

    const linkClasses = (path) =>
        `px-4 py-2 rounded transition ${pathname === path ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-100'
        }`;

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-700">Blog App</h1>
                <div className="space-x-2">
                    <Link to="/home" className={linkClasses('/home')}>Home</Link>
                    <Link to="/blog" className={linkClasses('/blog')}>Blog</Link>
                    <Link to="/blog/add" className={linkClasses('/blog/add')}>Add Blog</Link>
                    <Link to="/about" className={linkClasses('/about')}>About</Link>
                    {user
                        ? <Link to="/login" className={linkClasses('/login')} onClick={logout}>Logout</Link>
                        : <Link to="/login" className={linkClasses('/login')}>Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
