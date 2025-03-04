import {NextResponse} from "next/server";

export async function POST(req: Request) {
    return NextResponse.json({message: `"User ${req} registered successfully" `}, {status: 201});
}
