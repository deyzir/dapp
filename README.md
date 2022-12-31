# CREATE A DAPP WEBSİTE 
### before start;
There is no react packages inside this repo
<br>
#How is it looking code 

![images](https://user-images.githubusercontent.com/64195458/207062889-edfed772-f528-4c75-977a-b6244a51c4dd.gif)


Before we start what we will use source
<br>
1 - REACT 
<br>
2 - HARDHAT
<br>
3 - İNFURA
<br>
4 - ETHERSCAN
<br>
5 - NODE
<br>
6 - CHAKRA UI
<br>
7 - ALCHEMY
<br>
8 - PİNATA
<br>
9 - HASHLİPS CONTRACTS
<br>
Let We Start ;)
#
```
- npx create-react-app x
- Enter to inside x file (dont paste this code to terminal)
- npm i -D dotenv
- npm i -D @nomiclabs/hardhat-etherscan
- npm i -D hardhat
- npx hardhat
- reate basic simple project
- npm i @openzeppelin/contracts
```

<br>
- get to chakra uı webiste and go to installation - then copy (npm i ....)
<br>
#
We will delete some file in x folder example; satup-test.js,app.test.js vb 
<br>
Of course you have to clear ın ındex.js into reportWebtials and course we should delete something in app.js
<br>
Find contracts folder then create new file in contracts name 'y.sol' paste your solidity code into y.sol
<br>
Enter to scripts folder and create new file name is 'deploying.js' then put your code into deploying.js
<br>
We will get fake ether like goerli testnet we can buy from https://goerlifaucet.com/
<br>
And of course should from metamask settings show testnets 
<br>
Go to infura and create new project. choose goerli testnet
<br>
Come back to vscode add .env file 
<br>
Enter etherscan key on .env file
<br>
Enter private keys on .env file
<br>
Enter hardhat.config.js and put your code inside to hardhat.config.js 
<br>

Right now we can compile this code 
<br>
```
npx hardhat compile
npx hardhat run scripts/deploying.js --network georli 
```

<br>
We can go to goerliethercan and we can see contract address 
<br>
But there is a little problem  this contract dont verify we will verify this contract
<br>


```
npx hardhat verify -- network goerli -enter the contract adress here-
```

<br>
Very good everything is working right now  ;)

# How we can connect to website this contract 

Actually its very clear we can look 'mainMint.js file' 
<br>
We used to web3 for connection to website or we can use ether.js its your choice


```
    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                minessAdress,
                mines.abi,
                signer 
            );

```

This code allow us to connect but we see **mines.abi** 
First of all we have to add mines.abi file to src folder.

<img width="319" alt="Screenshot 2022-12-13 at 08 34 04" src="https://user-images.githubusercontent.com/64195458/207234973-fe14371c-8d8b-4de0-9fe3-7b0195f94414.png">

This image we can see it but the name is different to src because ı changed it 
<br>
<img width="324" alt="Screenshot 2022-12-13 at 08 35 00" src="https://user-images.githubusercontent.com/64195458/207235096-21806a68-876d-47d1-b07b-e84836f41de1.png">

This file name is **Miness.json**
<br>
I just did copy past from artifact/contracts/....json. to src/Miness.json
<br>
Everything is looking good 


# How to create nft image 

First of all we should go to hashlips github contract - 

https://github.com/HashLips/hashlips_art_engine

We can see how to use this repo

İf you create nft images and json's we can go to ıpfs website , pinata.

<br> 
##Very good almost done
<br>
### This side little important for your nft upload to testnet.opensea


<img width="1470" alt="Screenshot 2022-12-13 at 08 56 23" src="https://user-images.githubusercontent.com/64195458/207238104-a65bf479-391f-4e3d-998f-e8e44438e514.png">

This photo we are seeing **BaseUrl** we have to add from ipfs metadata so **json** file to **baseUrl** 


Of course we have to allow some function for make a mint 

<img width="1470" alt="Screenshot 2022-12-13 at 08 59 12" src="https://user-images.githubusercontent.com/64195458/207238681-104c0cf6-3027-4671-a992-a0d7a1cfd305.png">
like this 
<br>
so how we can control this token 'NFT'

if you want you can go to ethercan  and connect your wallet then you can mint here 

<img width="1470" alt="Screenshot 2022-12-13 at 09 04 28" src="https://user-images.githubusercontent.com/64195458/207239378-fac49d57-b8a4-49d5-8a08-7e7485d1d6f4.png">
<br>

OR
<br>
you can mint website 

WELL DONE EVERYTHİNG İS DONE ;)













