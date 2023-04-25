import Image from 'next/image';
import { Inter } from 'next/font/google';
import { langchainBasic } from './api/langchainBasic';
import { langchainMultiSteep } from './api/langchainMultiSteep';
import { langchainMultiSteepDinamic } from './api/langchainMultiSteepDinamic';

import { OpenAI } from 'langchain/llms/openai';

const inter = Inter({ subsets: ['latin'] });

const agentresult = async () => {
  const result = await langchainMultiSteepDinamic();
  console.log(result);
};

agentresult();

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
