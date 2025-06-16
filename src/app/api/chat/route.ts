import { openai } from '@ai-sdk/openai';
import { streamText, type CoreMessage } from 'ai';
import {
  WELCOME_MESSAGE,
  MAIN_MENU,
  CX_AI_DETAILS,
  WORKFLOW_AI_DETAILS,
  PRODUCT_STUDIO_DETAILS,
  DEEP_AI_DETAILS,
} from '@/lib/reignit-knowledge-base';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages: clientMessages } = await req.json();
    console.log('Received clientMessages for /api/chat:', JSON.stringify(clientMessages, null, 2));

        const latestUserMessage = clientMessages[clientMessages.length - 1]?.content as string | undefined;

    let contextualKnowledge = '';
    if (latestUserMessage) {
      const lowerUserMessage = latestUserMessage.toLowerCase();
      if (lowerUserMessage.includes('cx ai') || lowerUserMessage.includes('customer experience')) {
        contextualKnowledge = CX_AI_DETAILS;
      } else if (lowerUserMessage.includes('workflow ai') || lowerUserMessage.includes('automation')) {
        contextualKnowledge = WORKFLOW_AI_DETAILS;
      } else if (lowerUserMessage.includes('product studio') || lowerUserMessage.includes('ai products')) {
        contextualKnowledge = PRODUCT_STUDIO_DETAILS;
      } else if (lowerUserMessage.includes('deep ai') || lowerUserMessage.includes('custom ai models') || lowerUserMessage.includes('custom intelligence')) {
        contextualKnowledge = DEEP_AI_DETAILS;
      } else if (lowerUserMessage.includes('services') || lowerUserMessage.includes('what you do') || lowerUserMessage.includes('help') && clientMessages.length === 1) {
        // If it's a general service query or first interaction asking for help
        contextualKnowledge = MAIN_MENU;
      }
    }

    const systemMessage: CoreMessage = {
      role: 'system',
      content: `You are a friendly, professional AI assistant for Reignit Inc. Your primary goal is lead generation: guide users to the 'Get Your Free AI Audit' form or to email sales@reignitinc.com. 
Answer user questions about services using the 'Relevant Information' below. After explaining a service, proactively suggest the Audit and sales email as next steps. Be conversational and helpful.
IMPORTANT: When you present a list of items (like services), you MUST use Markdown bullet points (e.g., * Item 1) for clear formatting.

${contextualKnowledge ? `Relevant Information:\n${contextualKnowledge}\n\nBased on this, respond to the user and guide them to next steps.` : 'If asked for a service overview, present main categories and suggest the Audit/sales email for personalized advice.'}`
    };
    // console.log('DEBUG: Using simplified system prompt.'); // Restored full prompt

    // Prepend system message. If it's the very first message from the user, also prepend the welcome message as if the bot said it first.
    const messagesForAPI: CoreMessage[] = clientMessages.length === 1 && !contextualKnowledge 
      ? [
          { role: 'assistant', content: WELCOME_MESSAGE }, // Bot's welcome
          systemMessage, // System prompt with general instructions
          ...clientMessages // User's first message
        ]
      : [systemMessage, ...clientMessages];

    console.log('Messages being sent to API:', JSON.stringify(messagesForAPI, null, 2));

    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages: messagesForAPI,
      async onChunk({ chunk }) {
        console.log('onChunk - Received chunk from AI:', chunk);
      },
      async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
        console.log('onFinish - AI stream finished. Reason:', finishReason, 'Final text length:', text?.length);
        if (toolCalls) console.log('onFinish - Tool calls:', toolCalls);
        if (toolResults) console.log('onFinish - Tool results:', toolResults);
        console.log('onFinish - Usage:', usage);
      },
    });
    console.log('Successfully initiated streamText with OpenAI.');

    // Respond with the stream
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in /api/chat route:', error);
    let errorMessage = 'Error processing your request';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Error name:', error.name);
      console.error('Error stack:', error.stack);
    }
    return new Response(JSON.stringify({ error: 'Error processing your request', details: errorMessage }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
