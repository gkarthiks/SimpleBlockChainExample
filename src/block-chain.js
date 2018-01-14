import Block from './block';

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficultyLevel = 5;
  }

  /**
     * Returns the first block in the block chain called Genesis Block.
     * @returns {Block}
     */
  createGenesisBlock() {
    return new Block(0, new Date().getTime(), { blockName: 'GenesisBlock', createdBy: 'Karthik' });
  }

  /**
     * Returns the very recent block in the chain.
     * @returns {*}
     */
  fetchLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  /**
     * Adds the new block to the chain at the end and updates the new currentHash after adding the prev
     */
  addNewBlock(newBlock) {
    newBlock.prevHash = this.fetchLastBlock().currentHash;
    newBlock.mineBlock(this.difficultyLevel);
    newBlock.currentHash = newBlock.calculateHashValue();

    this.chain.push(newBlock);
  }
}

export default BlockChain;
