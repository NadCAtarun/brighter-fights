import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const {email} = await req.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json({error: "Invalid email address"}, {status: 400});
        }

        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY as string,
            },
            body: JSON.stringify({
                email,
                listIds: [4],
                updateEnabled: true,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({error: errorData.message || "Failed to subscribe"}, {status: response.status});
        }

        return NextResponse.json({message: "Subscription successful"}, {status: 200});
    } catch (error) {
        console.error("Error subscribing user:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}
