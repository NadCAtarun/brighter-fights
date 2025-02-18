import {NextResponse} from "next/server";

/**
 * Handles a POST request to subscribe a user to a mailing list.
 * The request body must include an email address to be subscribed.
 * Sends the email to the specified API endpoint for adding the user to the list.
 * Responds with an appropriate JSON message based on success or error.
 *
 * @param {Request} req - The incoming HTTP request containing the user's email in the JSON body.
 * @return {Promise<Response>} A Response object containing a JSON payload with the result of the subscription request.
 */
export async function POST(req: Request): Promise<Response> {
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
