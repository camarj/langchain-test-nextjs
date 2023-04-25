import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';

export const langchainMemory = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
  });

  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory: memory });
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log(res1);
  const res2 = await chain.call({ input: "What's my name?" });
  console.log(res2);
};
