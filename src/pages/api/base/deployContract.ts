// pages/api/deployContract.js

import { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { BaseGoerli } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(BaseGoerli);
export default async function deployContract(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extracting parameters from the request body
    const { contractType, name, walletAddress } = req.body;

    // Deploy the contract
    const txResult = await sdk.deployer.deployBuiltInContract(contractType, {
      name: name,
      primary_sale_recipient: walletAddress,
      voting_token_address: walletAddress, // Only used for Vote
    });

    // Respond with the transaction result
    res.status(200).json({ success: true, data: txResult });
  } catch (error) {
    // Handle the error
    res.status(500).json({ success: false });
  }
}
