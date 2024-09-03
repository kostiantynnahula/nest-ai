import OpenAI from 'openai';

export const parseProductDetailsResponse = (
  response: OpenAI.Chat.Completions.ChatCompletion,
) => {
  return JSON.parse(response.choices[0].message.content);
};
