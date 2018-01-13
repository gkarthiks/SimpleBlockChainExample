import SHA256 from 'sha256';

class Block {
  constructor(positionIdx, timestamp, data, prevHash) {
    this.positionIdx = positionIdx;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.currentHash = this.calculateHashValue();
  }

  /**
   * Creates double hashing for the current Block's properties and adds to the current block.
   */
  calculateHashValue() {
    return SHA256.x2(this.positionIdx + this.timestamp + JSON.stringify(this.data) + this.prevHash).toString();
  }
}

export default Block;
