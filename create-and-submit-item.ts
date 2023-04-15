import * as Arseeding from "arseeding-js/esm/submitOrder.js";
import * as dotenv from "dotenv";
import ArseedingArBundles from "arseeding-arbundles";
import { Wallet } from "ethers";

dotenv.config();

const arseedingUrl = "https://arseed.web3infra.dev";
const apikey = process.env.APIKEY;
const secret = process.env.SECRET;

const data = "some data here....";
const tags = [
  {
    name: "a",
    value: "aaaa",
  },
  {
    name: "b",
    value: "bbb",
  },
  {
    name: "Content-Type",
    value: "text/html; charset=utf-8",
  },
];

const wallet = Wallet.fromMnemonic(secret!);

const eccSigner = new ArseedingArBundles.signers.EthereumSigner(
  wallet.privateKey.substring(2)
);

const res = await Arseeding.createAndSubmitItem(
  Buffer.from(data),
  { tags },
  {
    apiKey: apikey,
    currency: "USDC",
    arseedUrl: arseedingUrl,
    signer: eccSigner,
    path: "",
  }
);

console.log({ res });
// {
//   res: {
//     itemId: "TTQ-UsWo6Tj8e6m-WldrSmBmnirs9RmIs0jFMDW50Yw",
//     size: 221,
//     bundler: "uDA8ZblC-lyEFfsYXKewpwaX-kkNDDw8az3IW9bDL68",
//     currency: "USDC",
//     decimals: 6,
//     fee: "1805",
//     paymentExpiredTime: 0,
//     expectedBlock: 1159234,
//   },
// };
