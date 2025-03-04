"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("/api/auth/register", { name, email, password });
            router.push("/login");
        } catch (_error) {
            console.error("Register error:", _error);
            alert("Registration failed!");
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl mb-4">Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 w-full mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-green-500 text-white p-2 w-full rounded">Register</button>
            </form>
        </div>
    );
}
