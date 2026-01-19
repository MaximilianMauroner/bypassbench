export const OUTPUT_DIRECTORY = "./results";

export const MAX_CONCURRENCY = 40;
export const TEST_RUNS_PER_MODEL = 10;
export const TIMEOUT_SECONDS = 400;
export const STAGGER_DELAY_MS = 150;

import { createOpenAI } from "@ai-sdk/openai";
import { openrouter } from "@openrouter/ai-sdk-provider";

export type RunnableModel = {
  name: string;
  llm: any; // Support both LanguageModelV2 and LanguageModelV3
  providerOptions?: any;
  reasoning?: boolean;
};

const openai = createOpenAI();

// Include "usage" so we can log cost
const defaultProviderOptions = {
  usage: {
    include: true,
  },
};

export const modelsToRun: RunnableModel[] = [
  {
    name: "gpt-5-nano",
    llm: openai("gpt-5-nano"),
    reasoning: false,
  },
  // {
  //   name: "gpt-oss-20b",
  //   llm: openrouter("openai/gpt-oss-20b", defaultProviderOptions),
  //   reasoning: true,
  // },
];
