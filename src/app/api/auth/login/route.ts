import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    const {email, password} = await req.json();

    if (email === "test@example.com" && password === "password") {
        console.log("works")
        const token = jwt.sign({name: "Test User", email}, "secret", {expiresIn: "1h"});
        return NextResponse.json({token}, {status: 200});
    }
    console.log("invalidccre")
    return NextResponse.json({error: "Invalid credentials"}, {status: 401});
}
