import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const {name, email, password} = await req.json();
    console.log("New user registered:", {name, email, password});
    return NextResponse.json({message: "User registered successfully"}, {status: 201});
}
