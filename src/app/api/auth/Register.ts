export async function POST(req: Request) {
    const {name, email, password} = await req.json();
    return Response.json({message: "User registered"}, {status: 201});
}
