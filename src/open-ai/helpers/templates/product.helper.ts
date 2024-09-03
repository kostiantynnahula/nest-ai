export const productDetailsTemplate = (
  product: string,
  additionalFields?: string,
) => {
  return `Generate a JSON object for an ${product} item based on the following schema { 
              "name": "string",
              "brand": "string",
              "category": "string",
              "price": "number", // in USD
              "description": "string",
              "characteristics": "Array<{name: string; description: string}>"
              "variants": [ { "color": "string" } ],
              ${additionalFields}
            }`;
};
