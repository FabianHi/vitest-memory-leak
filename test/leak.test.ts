import { describe, expect, it } from 'vitest';

describe('Trigger memomry leak exception', () => {
    it('should fail', () => {
      expect(1).toEqual(2);
    });
});
