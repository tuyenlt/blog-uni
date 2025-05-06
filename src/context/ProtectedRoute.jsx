import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";

export default function ProtectedRoute({ children }) {
    const { user } = useAuthContext()
    const navigate = useNavigate()

    if (!user) {
        return (
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                    <h2 className="text-xl font-semibold mb-4">Protected Content!</h2>
                    <p className="mb-4">You must login to continue.</p>
                    <div className="flex justify-center gap-4 w-full">

                        <button
                            onClick={() => navigate(-1)}
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => navigate("/login")}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (<>
        {children}
    </>)
}