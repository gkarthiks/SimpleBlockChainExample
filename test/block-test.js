import Block from '../src/block';

describe('calculateHashValue test', () => {
  it(
    'Check if hash value is returned',
    async () => {
      var block = new Block(0, new Date().getTime(), { blockName: 'IteratorBlock', createdBy: 'IteratorCount' });
      var hashVal = block.calculateHashValue();

      expect(hashVal).toBeTruthy();
    },
    10000,
  );

  it(
    'Test mined value',
    async () => {
      var block = new Block(0, new Date().getTime(), { blockName: 'IteratorBlock', createdBy: 'IteratorCount' });
      var hashVal = block.mineBlock(1);

      expect(block.currentHash).toBeTruthy();
    },
    10000,
  );
});