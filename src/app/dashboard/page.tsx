"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {jwtDecode} from "jwt-decode";

interface User {
    name: string;
    email: string;
}

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        } else {
            const decoded: User = jwtDecode(token);
            setUser(decoded);
        }
    }, []);

    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl mb-4">Welcome, {user?.name || "User"}!</h2>
            <button
                className="bg-red-500 text-white p-2 w-full rounded"
                onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/login");
                }}
            >
                Logout
            </button>
        </div>
    );
}
