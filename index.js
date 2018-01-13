import Block from './src/block';
import BlockChain from './src/block-chain';
import delay from 'delay';

let blockToBeCreated = 10;


let executeBlockChain = async () => {
    let gkarthiks = new BlockChain();
    gkarthiks = await blockCreator(blockToBeCreated, gkarthiks);
    console.log(`Simple BlockChain for ${blockToBeCreated} blocks:\n`+JSON.stringify(gkarthiks));
};

async function blockCreator(totalBlock, gkarthiks) {
    for(let i = 1; i<= totalBlock; i++) {
        await delay(500);
        console.log('Creating and adding block # '+ i);
        gkarthiks.addNewBlock(new Block(i, new Date().getTime(), { blockName: 'IteratorBlock$#'+i, createdBy: 'IteratorCount#'+i }));
    }
    return gkarthiks;
}

executeBlockChain();