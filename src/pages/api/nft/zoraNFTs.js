import fetch from "node-fetch";

export default async function handler(req, res) {
  const ZORA_GRAPHQL_ENDPOINT = "https://api.zora.co/graphql";

  const { network, address } = req.body || req.query;

  if (!network || !address) {
    return res
      .status(400)
      .json({ error: "Both network and address are required" });
  }

  const query = `
        query NFTsByAddress {
            media(where: { currentOwner: "${address}" }, networks: [{ network: ${network}, chain: MAINNET }]) {
                edges {
                    node {
                        id
                        contentURI
                        metadataURI
                        owner {
                            id
                        }
                        mintedBy
                        mintedAtTimestamp
                        currentOwner {
                            id
                        }
                    }
                }
            }
        }
    `;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(ZORA_GRAPHQL_ENDPOINT, options);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch NFTs from Zora API" });
  }
}
