import { OpenAI } from 'langchain/llms/openai';

export const langchainBasic = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
  });

  const res = await model.call(
    'What would be a good company name a company that makes colorful socks?'
  );
  console.log(res);
  return res;
};
