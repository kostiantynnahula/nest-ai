import { productDetailsTemplate } from './product.helper';

describe('ProductTemplateHelper', () => {
  it('should return product template object', () => {
    const result = productDetailsTemplate('iPhone 15 Pro');
    expect(result).toBeDefined();
    expect(result).toContain('iPhone 15 Pro');
  });
});
