import { NextRequest, NextResponse } from "next/server";

const KEY = process.env.OPENAI_API_KEY;
const base_uri = "https://api.openai.com/v1/chat/completions";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${KEY}`,
};

const data = {
  model: "gpt-3.5-turbo",
};

const API_KEY = process.env.YOUR_API_KEY;

const covalent_headers = new Headers();
headers.set("Authorization", `Bearer ${API_KEY}`);

const fetchNFTMetadata = async (chain, contractAddress, tokenId) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/nft/${contractAddress}/metadata/${tokenId}/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

const fetchNFTTransactions = async (chain, contractAddress, tokenId) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/tokens/${contractAddress}/nft_transactions/${tokenId}/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

const fetchTransactionSummary = async (chain, walletAddress) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/address/${walletAddress}/transactions_summary/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

const fetchTransactionsV3 = async (chain, walletAddress, page) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/address/${walletAddress}/transactions_v3/page/${page}/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

const fetchBalancesV2 = async (chain, walletAddress) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/address/${walletAddress}/balances_v2/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

const fetchHistoricalBalances = async (chain, walletAddress) => {
  const response = await fetch(
    `https://api.covalenthq.com/v1/${chain}/address/${walletAddress}/historical_balances/`,
    { method: "GET", covalent_headers }
  );
  return response.json();
};

export async function POST(req, res) {
  try {
    const { query } = await req.json();

    const requestData = {
      ...data,
      messages: [{ role: "user", content: query }],
      functions: [
        {
          name: "fetchNFTMetadata",
          description:
            "Get NFT collection details of collections like cyberpunks or any other NFT collection given a contract address and tokenID",
          parameters: {
            type: "object",
            properties: {
              collection: {
                type: "string",
                description: "name of the NFT collection",
              },
              contractAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
              tokenId: {
                type: "string",
                description: "tokenId of the NFT",
              },
            },
            required: ["collection", "contractAddress", "tokenId"],
          },
        },
        {
          name: "fetchNFTTransactions",
          description:
            "get NFT collection transcations given a contract address",
          parameters: {
            type: "object",
            properties: {
              collection: {
                type: "string",
                description: "name of the NFT collection",
              },
              contractAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
              tokenId: {
                type: "string",
                description: "tokenId of the NFT",
              },
            },
            required: ["collection", "contractAddress", "tokenId"],
          },
        },
        {
          name: "fetchTransactionSummary",
          description: "get transcations given a wallet address",
          parameters: {
            type: "object",
            properties: {
              walletAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
            },
            required: ["walletAddress"],
          },
        },
        {
          name: "fetchTransactionsV3",
          description: "get last 50 transcations given a wallet address",
          parameters: {
            type: "object",
            properties: {
              walletAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
            },
            required: ["walletAddress"],
          },
        },
        {
          name: "fetchBalancesV2",
          description: "get balances of given a wallet address",
          parameters: {
            type: "object",
            properties: {
              walletAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
            },
            required: ["walletAddress"],
          },
        },
        {
          name: "fetchHistoricalBalances",
          description:
            "get historical balances of given a wallet address, including erc20 erc1155 tokens and previous holdings",
          parameters: {
            type: "object",
            properties: {
              walletAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
            },
            required: ["walletAddress"],
          },
        },
        {
          name: "buyNFT",
          description:
            "Buy NFT of collections like cyberpunks or any other NFT collection given a contract address and tokenID",
          parameters: {
            type: "object",
            properties: {
              collection: {
                type: "string",
                description: "name of the NFT collection",
              },
              contractAddress: {
                type: "string",
                description: "contract address of the NFT collection",
              },
              tokenId: {
                type: "string",
                description: "tokenId of the NFT",
              },
            },
            required: ["collection", "contractAddress", "tokenId"],
          },
        },
        {
          name: "sendMoney",
          description: "Send money on Blockchain, to another wallet address",
          parameters: {
            type: "object",
            properties: {
              address: {
                type: "string",
                description: "wallet address of the receiver",
              },
              required: ["address"],
            },
          },
        },
        {
          name: "drop",
          description: "upcoming Airdrops on blockchain",
          parameters: {
            type: "object",
            properties: {
              collection: {
                type: "string",
                description: "name of the NFT collection",
              },
            },
            required: ["collection"],
          },
        },
        {
          name: "Reminder",
          description: "Set Reminders about things to do",
          parameters: {
            type: "object",
            properties: {
              reminder: {
                type: "string",
                description: "Task to remind about",
              },
            },
            required: ["reminder"],
          },
        },
        {
          name: "Task",
          description: "Perform task or activities like searching for NFTs",
          parameters: {
            type: "object",
            properties: {
              task: {
                type: "string",
                description: "task title",
              },
            },
            required: ["task"],
          },
        },
        {
          name: "walletHealth",
          description: "Check wallet health of a wallet address",
          parameters: {
            type: "object",
            properties: {
              address: {
                type: "string",
                description: "wallet address of the receiver",
              },
              required: ["address"],
            },
          },
        },
        {
          name: "news",
          description: "Get news related to Flow Blockchain",
          parameters: {
            type: "object",
            properties: {
              headline: {
                type: "string",
                description: "headline of the news",
              },
              required: ["headline"],
            },
          },
        },
        {
          name: "smartContract",
          description: "Get smart contract details to generate",
          parameters: {
            type: "object",
            properties: {
              description: {
                type: "string",
                description: "description of smart contract",
              },
              required: ["description"],
            },
          },
        },
      ],
      function_call: "auto",
    };

    const response = await fetch(base_uri, {
      method: "POST",
      headers,
      body: JSON.stringify(requestData),
    });

    const json = await response.json();
    let choice = json.choices[0];

    const { function_call } = choice.message;
    console.log("function_call: ", function_call);
    if (function_call) {
      const args = JSON.parse(function_call.arguments);
      if (function_call.name === "fetchNFTMetadata") {
        const { chain, contractAddress, tokenId } = args;
        const result = await fetchNFTMetadata(chain, contractAddress, tokenId);
        console.log(result);
      }
      if (function_call.name === "fetchNFTTransactions") {
        const { chain, contractAddress, tokenId } = args;
        const result = await fetchNFTTransactions(
          chain,
          contractAddress,
          tokenId
        );
        console.log(result);
      }
      if (function_call.name === "fetchTransactionSummary") {
        const { chain, walletAddress } = args;
        const result = await fetchTransactionSummary(chain, walletAddress);
        console.log(result);
      }
      if (function_call.name === "fetchTransactionsV3") {
        const { chain, walletAddress, page } = args;
        const result = await fetchTransactionsV3(chain, walletAddress, page);
        console.log(result);
      }
      if (function_call.name === "fetchBalancesV2") {
        const { chain, walletAddress } = args;
        const result = await fetchBalancesV2(chain, walletAddress);
        console.log(result);
      }
      if (function_call.name === "fetchHistoricalBalances") {
        const { chain, walletAddress } = args;
        const result = await fetchHistoricalBalances(chain, walletAddress);
        console.log(result);
      }
    } else {
      console.log("choice: ", choice);
    }
  } catch (err) {
    console.log("error: ", err);
    return NextResponse.json({ error: err });
  }
}
