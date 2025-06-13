import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIStream, StreamingTextResponse } from 'ai';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

  // Get a streamed response from Google
  const stream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(
      // Right now, we're just sending the last message. 
      // We can improve this later to include chat history.
      messages[messages.length - 1].content
    );

  // Convert the response into a friendly text-stream
  const aiStream = GoogleAIStream(stream);

  // Respond with the stream
  return new StreamingTextResponse(aiStream);
}
