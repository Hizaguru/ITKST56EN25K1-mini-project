"use client";
import {useState} from "react";
import axios from "axios";

export default function AuthModal({onClose}: { onClose: () => void }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isLogin) {
                const res = await axios.post("http://localhost:8080/api/auth/login", {email, password});
                localStorage.setItem("token", res.data.token);
                alert("Login successful!");
                onClose();
                window.location.href = "/dashboard";
            } else {
                await axios.post("http://localhost:8080/api/auth/register", {name, email, password});
                alert("Registration successful! You can now log in.");
                setIsLogin(true);
            }
        } catch (_error) {
            console.error("Auth error:", _error);
            alert("Authentication failed!");
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <form onSubmit={handleAuth} className="flex flex-col">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="border p-2 rounded mb-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded mb-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className={`p-2 rounded text-white ${
                            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        } transition`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="text-sm text-center mt-3">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✖
                </button>
            </div>
        </div>
    );
}
