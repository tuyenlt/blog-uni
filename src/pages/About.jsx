const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 text-blue-700">About Us</h1>
                <p className="text-lg mb-6">
                    Welcome to our blog — where we pretend to be experts and you pretend to read everything. It’s a win-win.
                </p>

                <p className="text-base mb-4">
                    Whether you’re a newbie who just googled “what is JSX” or a senior dev who’s still afraid of regex, we’re here for you. No judgment (okay, maybe a little).
                </p>
                <p className="text-base">
                    Got feedback, ideas, or a meme you just *have* to share? Slide into our inbox like it’s 2005. We’d love to ignore it professionally. Just kidding. Mostly.
                </p>
            </div>
        </div>
    );
};

export default About;
