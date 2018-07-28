# SimpleBlockChainExample
#### Simple example for the Block Chain implementation.

This example program is to illustrate the `basic working of the blockchain` in JavaScript. In realtime, adding a new block to the chain is not so simple :warning: . It will under go a lot of checks before adding.

The `Block` class is the basic element in the block chain which holds the `data` and details about the data i.e., `timestamp`, `previous block's hash value` and `current hash value` in this case.

The `BlockChain` is the chain instance which holds the chain of Blocks.

The `nonce` is an [arbitrary value](https://en.wikipedia.org/wiki/Cryptographic_nonce) for encryption.

The `difficultyLevel` is the difficulty level of the mining algorithm. In our example we are using the difficulty level to determine the number of leading zeros in evey block's hash.

In this example, every block will take a certain amount of time to mine. That is because of the difficuiltyLevel set to the algorithm. To control the frequency of the every new block, the difficuiltyLevel is adjusted.

## Prerequisites
* node
* npm

## Execute 
To run this program, download this code into your local repo and execute using babel-node.

> git clone https://github.com/gkarthiks/SimpleBlockChainExample.git

> cd SimpleBlockChainExample

> npm run build

> npm start

### Sample Output:
Your output will look like,
```json
Creating and adding block # 1
Mined Block's hash: 00000663b541cdcaf8a690cc55124785c16069dd26b0908fae908c4ae3008058
Creating and adding block # 2
Mined Block's hash: 00000a211c3061b3ab96b6bdf190ede9367a0d94da5bde6330662f584eb85e0f
Creating and adding block # 3
Mined Block's hash: 000000bd69b1a2262d708b9f1755f71cb626c6b471c5f274b854d3998bd4214a
Creating and adding block # 4
Mined Block's hash: 0000015e151c3b7a1f658c2c7d134a37f24754fea2b8ff92dc0fa665a2b3731f
Creating and adding block # 5
Mined Block's hash: 000000bcea1ed1c852bed46cd89f24ef87571e87309b5d8f796f099c2515a491
Creating and adding block # 6
Mined Block's hash: 00000fa72c504dfff0701a3c2c785512d8e66e76db21d4db45b4586ee004c66c
Creating and adding block # 7
Mined Block's hash: 000008b32c010e5338b58ea3db623dcfa6e9a77eb37e7ce52c4f03183c1558fe
Creating and adding block # 8
Mined Block's hash: 00000a3546bd968fba2f98a45d1c4e87097a3949af1c56f65ca78dec12ebec20
Creating and adding block # 9
Mined Block's hash: 000007c8f03b438f89104d4965687fa7df79db8d6b1b360e1bd438760c23141f
Creating and adding block # 10
Mined Block's hash: 00000b9ce5ed97ffe3d5472d7bb8299556ee57743c9752498a2bf5b212d73831
Simple BlockChain for 10 blocks:
{  
   "chain":[  
      {  
         "positionIdx":0,
         "timestamp":1515912502885,
         "data":{  
            "blockName":"GenesisBlock",
            "createdBy":"Karthik"
         },
         "currentHash":"ea8f111bcf7755bb8fba1564d823ddda02f015ee7a1008f604610dc34190fbc8",
         "nonce":0.10735460532562424
      },
      {  
         "positionIdx":1,
         "timestamp":1515912502887,
         "data":{  
            "blockName":"IteratorBlock$#1",
            "createdBy":"IteratorCount#1"
         },
         "prevHash":"ea8f111bcf7755bb8fba1564d823ddda02f015ee7a1008f604610dc34190fbc8",
         "currentHash":"00000663b541cdcaf8a690cc55124785c16069dd26b0908fae908c4ae3008058",
         "nonce":0.21878336943766774
      },
      {  
         "positionIdx":2,
         "timestamp":1515912507432,
         "data":{  
            "blockName":"IteratorBlock$#2",
            "createdBy":"IteratorCount#2"
         },
         "prevHash":"00000663b541cdcaf8a690cc55124785c16069dd26b0908fae908c4ae3008058",
         "currentHash":"00000a211c3061b3ab96b6bdf190ede9367a0d94da5bde6330662f584eb85e0f",
         "nonce":0.33144292253440355
      },
      {  
         "positionIdx":3,
         "timestamp":1515912508807,
         "data":{  
            "blockName":"IteratorBlock$#3",
            "createdBy":"IteratorCount#3"
         },
         "prevHash":"00000a211c3061b3ab96b6bdf190ede9367a0d94da5bde6330662f584eb85e0f",
         "currentHash":"000000bd69b1a2262d708b9f1755f71cb626c6b471c5f274b854d3998bd4214a",
         "nonce":0.7953519322615568
      },
      {  
         "positionIdx":4,
         "timestamp":1515912510097,
         "data":{  
            "blockName":"IteratorBlock$#4",
            "createdBy":"IteratorCount#4"
         },
         "prevHash":"000000bd69b1a2262d708b9f1755f71cb626c6b471c5f274b854d3998bd4214a",
         "currentHash":"0000015e151c3b7a1f658c2c7d134a37f24754fea2b8ff92dc0fa665a2b3731f",
         "nonce":0.23161712894539965
      },
      {  
         "positionIdx":5,
         "timestamp":1515912517467,
         "data":{  
            "blockName":"IteratorBlock$#5",
            "createdBy":"IteratorCount#5"
         },
         "prevHash":"0000015e151c3b7a1f658c2c7d134a37f24754fea2b8ff92dc0fa665a2b3731f",
         "currentHash":"000000bcea1ed1c852bed46cd89f24ef87571e87309b5d8f796f099c2515a491",
         "nonce":0.5458232180866207
      },
      {  
         "positionIdx":6,
         "timestamp":1515912543169,
         "data":{  
            "blockName":"IteratorBlock$#6",
            "createdBy":"IteratorCount#6"
         },
         "prevHash":"000000bcea1ed1c852bed46cd89f24ef87571e87309b5d8f796f099c2515a491",
         "currentHash":"00000fa72c504dfff0701a3c2c785512d8e66e76db21d4db45b4586ee004c66c",
         "nonce":0.7806789700907057
      },
      {  
         "positionIdx":7,
         "timestamp":1515912555469,
         "data":{  
            "blockName":"IteratorBlock$#7",
            "createdBy":"IteratorCount#7"
         },
         "prevHash":"00000fa72c504dfff0701a3c2c785512d8e66e76db21d4db45b4586ee004c66c",
         "currentHash":"000008b32c010e5338b58ea3db623dcfa6e9a77eb37e7ce52c4f03183c1558fe",
         "nonce":0.463427808515664
      },
      {  
         "positionIdx":8,
         "timestamp":1515912556597,
         "data":{  
            "blockName":"IteratorBlock$#8",
            "createdBy":"IteratorCount#8"
         },
         "prevHash":"000008b32c010e5338b58ea3db623dcfa6e9a77eb37e7ce52c4f03183c1558fe",
         "currentHash":"00000a3546bd968fba2f98a45d1c4e87097a3949af1c56f65ca78dec12ebec20",
         "nonce":0.5558729195438843
      },
      {  
         "positionIdx":9,
         "timestamp":1515912562957,
         "data":{  
            "blockName":"IteratorBlock$#9",
            "createdBy":"IteratorCount#9"
         },
         "prevHash":"00000a3546bd968fba2f98a45d1c4e87097a3949af1c56f65ca78dec12ebec20",
         "currentHash":"000007c8f03b438f89104d4965687fa7df79db8d6b1b360e1bd438760c23141f",
         "nonce":0.8212418651116493
      },
      {  
         "positionIdx":10,
         "timestamp":1515912569153,
         "data":{  
            "blockName":"IteratorBlock$#10",
            "createdBy":"IteratorCount#10"
         },
         "prevHash":"000007c8f03b438f89104d4965687fa7df79db8d6b1b360e1bd438760c23141f",
         "currentHash":"00000b9ce5ed97ffe3d5472d7bb8299556ee57743c9752498a2bf5b212d73831",
         "nonce":0.7948408763074524
      }
   ],
   "difficultyLevel":5
}
```
