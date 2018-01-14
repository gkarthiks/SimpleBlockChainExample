import SHA256 from 'sha256';

class Block {
  constructor(positionIdx, timestamp, data, prevHash) {
    this.positionIdx = positionIdx;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.currentHash = this.calculateHashValue();
    this.nonce = Math.random();
  }

  /**
   * Mines the current block with the given difficulty level.
   * @param difficultyLevel
   */
  mineBlock(difficultyLevel) {
    while(this.currentHash.substring(0, difficultyLevel) !== Array(difficultyLevel + 1).join('0')) {
      this.nonce = Math.random();
      this.currentHash = this.calculateHashValue();
    }
    console.log('Mined Block\'s hash: '+ this.currentHash);
  }

  /**
   * Creates double hashing for the current Block's properties and adds to the current block.
   */
  calculateHashValue() {
    return SHA256.x2(this.positionIdx + this.timestamp + JSON.stringify(this.data) + this.prevHash + this.nonce).toString();
  }
}

export default Block;
