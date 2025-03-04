"use client";
import {useState} from "react";
import AuthModal from "@/app/components/AuthModal";


export default function LoginPage() {
    const [showModal, setShowModal] = useState(true);

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            {showModal && <AuthModal onClose={() => setShowModal(false)}/>}
        </div>
    );
}
