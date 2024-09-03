import OpenAI from 'openai';
export const productDetailsResponse = {
  id: 'chatcmpl-A3Rpa2pyoDR7N3wpGu06vd5LTJ6ic',
  object: 'chat.completion',
  created: 1725385330,
  model: 'gpt-4o-2024-08-06',
  choices: [
    {
      index: 0,
      message: {
        role: 'assistant',
        content:
          '\n{\n  "name": "iPhone 15 Pro",\n  "brand": "Apple",\n  "category": "Smartphone",\n  "price": 999,\n  "description": "The iPhone 15 Pro features a sleek new design, advanced camera system, and powerful A17 Bionic chip, providing an unparalleled smartphone experience.",\n  "characteristics": [\n    {\n      "name": "Display",\n      "description": "6.1-inch Super Retina XDR display with ProMotion technology."\n    },\n    {\n      "name": "Processor",\n      "description": "A17 Bionic chip for exceptional performance and efficiency."\n    },\n    {\n      "name": "Camera",\n      "description": "Triple 48MP camera system for stunning photos and videos."\n    },\n    {\n      "name": "Design",\n      "description": "Surgical-grade stainless steel and textured matte glass."\n    },\n    {\n      "name": "Battery Life",\n      "description": "Up to 23 hours of talk time and supports MagSafe wireless charging."\n    }\n  ],\n  "variants": [\n    {\n      "color": "Silver"\n    },\n    {\n      "color": "Graphite"\n    },\n    {\n      "color": "Gold"\n    },\n    {\n      "color": "Pacific Blue"\n    }\n  ]\n}',
        refusal: null,
      },
      logprobs: null,
      finish_reason: 'stop',
    },
  ],
  usage: {
    prompt_tokens: 111,
    completion_tokens: 275,
    total_tokens: 386,
  },
  system_fingerprint: 'fp_9e15ccd6a4',
} as OpenAI.Chat.Completions.ChatCompletion;
