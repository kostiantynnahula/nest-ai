import { productDetailsResponse } from './../../../../test/mocks/product-details';
import { parseProductDetailsResponse } from './product.helper';

describe('ProductParserHelper', () => {
  it('should return parsed object', () => {
    const result = parseProductDetailsResponse(productDetailsResponse);
    expect(result.name).toBeDefined();
    expect(result.name).toEqual('iPhone 15 Pro');
    expect(result.description).toBeDefined();
    expect(result.characteristics).toBeDefined();
    expect(result.characteristics.length).toBeGreaterThan(0);
    expect(result.variants).toBeDefined();
    expect(result.variants.length).toBeGreaterThan(0);
  });
});
