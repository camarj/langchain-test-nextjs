import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

export const langchainMultiSteep = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
  });

  const template = 'What is a good name for a company that makes {product}?';

  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ['product'],
  });

  const chain = new LLMChain({ llm: model, prompt: prompt });

  const res = await chain.call({ product: 'colorful socks' });
  console.log(res);
  return res;
};
