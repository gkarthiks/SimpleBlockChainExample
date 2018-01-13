# SimpleBlockChainExample
#### Simple example for the Block Chain implementation.

This example program is to illustrate the `basic working of the blockchain` in JavaScript. In realtime, adding a new block to the chain is not so simple :warning: . It will under go a lot of checks before adding.

The `Block` class is the basic element in the block chain which holds the `data` and details about the data i.e., `timestamp`, `previous block's hash value` and `current hash value` in this case.

The `BlockChain` is the chain instance which holds the chain of Blocks.

## Execute 
To run this program, download this code into your local repo and execute using babel-node.

> git clone https://github.com/gkarthiks/SimpleBlockChainExample.git

> cd SimpleBlockChainExample

> ./node_modules/babel-cli/bin/babel-node.js index.js 

### Sample Output:
Your output will look like,
```json
Creating and adding block # 1
Creating and adding block # 2
Creating and adding block # 3
Creating and adding block # 4
Creating and adding block # 5
Creating and adding block # 6
Creating and adding block # 7
Creating and adding block # 8
Creating and adding block # 9
Creating and adding block # 10
Simple BlockChain for 10 blocks:

{  
   "chain":[  
      {  
         "positionIdx":0,
         "timestamp":1515836297070,
         "data":{  
            "blockName":"GenesisBlock",
            "createdBy":"Karthik"
         },
         "currentHash":"6e5a4ccc8a9636ba6780d682c99db2de97713bc06ba4546ee63e27d84b846150"
      },
      {  
         "positionIdx":1,
         "timestamp":1515836297578,
         "data":{  
            "blockName":"IteratorBlock$#1",
            "createdBy":"IteratorCount#1"
         },
         "prevHash":"6e5a4ccc8a9636ba6780d682c99db2de97713bc06ba4546ee63e27d84b846150",
         "currentHash":"5695a002f32fb433ba79699c7e77f1d13d85aac7e564e5289450a53c540927c1"
      },
      {  
         "positionIdx":2,
         "timestamp":1515836298082,
         "data":{  
            "blockName":"IteratorBlock$#2",
            "createdBy":"IteratorCount#2"
         },
         "prevHash":"5695a002f32fb433ba79699c7e77f1d13d85aac7e564e5289450a53c540927c1",
         "currentHash":"c56b3b0d622003fc37064f1be94f2918e30a98b9880ddb41b891e269e759ccd2"
      },
      {  
         "positionIdx":3,
         "timestamp":1515836298582,
         "data":{  
            "blockName":"IteratorBlock$#3",
            "createdBy":"IteratorCount#3"
         },
         "prevHash":"c56b3b0d622003fc37064f1be94f2918e30a98b9880ddb41b891e269e759ccd2",
         "currentHash":"4d6fe4202eb9c3ac47ef0fa6dad2485be2c44ea965a5a5ae35b0315bf3604c2a"
      },
      {  
         "positionIdx":4,
         "timestamp":1515836299087,
         "data":{  
            "blockName":"IteratorBlock$#4",
            "createdBy":"IteratorCount#4"
         },
         "prevHash":"4d6fe4202eb9c3ac47ef0fa6dad2485be2c44ea965a5a5ae35b0315bf3604c2a",
         "currentHash":"98315302554efcab4a99dcdc7673b43d33a2fd0270faf1e0754eb0df9309f1f6"
      },
      {  
         "positionIdx":5,
         "timestamp":1515836299588,
         "data":{  
            "blockName":"IteratorBlock$#5",
            "createdBy":"IteratorCount#5"
         },
         "prevHash":"98315302554efcab4a99dcdc7673b43d33a2fd0270faf1e0754eb0df9309f1f6",
         "currentHash":"ec8708b48bbca4d4224bca81f94e2848fb3aa68cffe48724d1b8eb2043f6e705"
      },
      {  
         "positionIdx":6,
         "timestamp":1515836300089,
         "data":{  
            "blockName":"IteratorBlock$#6",
            "createdBy":"IteratorCount#6"
         },
         "prevHash":"ec8708b48bbca4d4224bca81f94e2848fb3aa68cffe48724d1b8eb2043f6e705",
         "currentHash":"039fefafdc1518b07f1d68fc7c678cea19fb30558e88e19777b70b852375d409"
      },
      {  
         "positionIdx":7,
         "timestamp":1515836300590,
         "data":{  
            "blockName":"IteratorBlock$#7",
            "createdBy":"IteratorCount#7"
         },
         "prevHash":"039fefafdc1518b07f1d68fc7c678cea19fb30558e88e19777b70b852375d409",
         "currentHash":"aa2f04c33b5012687bcc2fc5558e1e2e162cfd51a100f561b2d7f5128bebc76f"
      },
      {  
         "positionIdx":8,
         "timestamp":1515836301095,
         "data":{  
            "blockName":"IteratorBlock$#8",
            "createdBy":"IteratorCount#8"
         },
         "prevHash":"aa2f04c33b5012687bcc2fc5558e1e2e162cfd51a100f561b2d7f5128bebc76f",
         "currentHash":"265727bc3eab0cbd2296ba1b268a0799915d2ae5c4270c486699cab8cea2efdf"
      },
      {  
         "positionIdx":9,
         "timestamp":1515836301595,
         "data":{  
            "blockName":"IteratorBlock$#9",
            "createdBy":"IteratorCount#9"
         },
         "prevHash":"265727bc3eab0cbd2296ba1b268a0799915d2ae5c4270c486699cab8cea2efdf",
         "currentHash":"a89b7348ac9f0a8090d5923c5d44b7c59efb365bb78f469ac9c66e7bc8f8b742"
      },
      {  
         "positionIdx":10,
         "timestamp":1515836302096,
         "data":{  
            "blockName":"IteratorBlock$#10",
            "createdBy":"IteratorCount#10"
         },
         "prevHash":"a89b7348ac9f0a8090d5923c5d44b7c59efb365bb78f469ac9c66e7bc8f8b742",
         "currentHash":"1e35d243ff7b6f27b8f2cc344b9969285bd0edae139afcfc883be526675273dd"
      }
   ]
}
```
