import { submitByApikey } from "arseeding-js";
import * as dotenv from "dotenv";

dotenv.config();

const arseedingUrl = "https://arseed.web3infra.dev";
const apikey = process.env.APIKEY;
const data = "some data here....";
const contentType = "text/html; charset=utf-8";
const tags = { a: "aa", b: "bb" };

const res = await submitByApikey(
  arseedingUrl,
  apikey!,
  "USDC",
  Buffer.from(data),
  contentType,
  tags
);

console.log({ res });
