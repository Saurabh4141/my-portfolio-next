import { NextResponse } from "next/server";

// Migrated from the original Vercel serverless function (api/chat.js).
// Same path (/api/chat) and same request/response contract.
export async function POST(req) {
  const { messages } = await req.json();
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error: Missing API Key" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
          model: "llama-3.3-70b-versatile",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch from Groq");
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
