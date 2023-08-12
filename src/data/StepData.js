const steps = [
  {
    title: "The main idea is to install the CLI provided by thirdweb.",
    content:
      "The interactive thirdweb command line interface has everything you need to create, build and deploy smart contracts and apps to Base.",
    code: "npm i -g @thirdweb-dev/cli",
  },
  {
    title: "Creating a project",
    content:
      "You can use the thirdweb CLI to create a new project that contains a smart contract, alternatively, you can deploy a prebuilt contract for NFTs, Tokens or Marketplace directly from the thirdweb Explore page. To create a new project using the CLI, run:",
    code: "npx thirdweb create contract",
  },
  {
    title: "Writing a simple contract",
    content:
      "You can use the thirdweb CLI to create a new project that contains a smart contract, alternatively, you can deploy a prebuilt contract for NFTs, Tokens or Marketplace directly from the thirdweb Explore page. To create a new project using the CLI, run:",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";

contract Contract is ERC721Base {
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}
}`,
  },
  {
    title: "Deploying Contract",
    content: `You can use the thirdweb CLI to deploy a smart contract to Base.

To deploy your smart contracts, from the root directory of your project, run:`,
    code: "npx thirdweb deploy",
  },
  {
    title: "Interacting with the contract",
    content: `To connect to your smart contract in the application, provide your smart contract address (which you can get from the dashboard) to the useContract hook like so:`,
    code: `import { useContract } from '@thirdweb-dev/react';

export default function Home() {
  const { contract } = useContract('<CONTRACT_ADDRESS>');

  // Now you can use the contract in the rest of the component!
}

const { data, isLoading } = useContractRead(contract, 'name');`,
  },
];

export default steps;
