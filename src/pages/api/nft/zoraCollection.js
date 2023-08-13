import fetch from "node-fetch";

export default async function handler(req, res) {
  const ZORA_GRAPHQL_ENDPOINT = "https://api.zora.co/graphql";

  const { network } = req.body || req.query;

  if (!network) {
    return res.status(400).json({ error: "Network is required" });
  }

  const query = `
        query CollectionInfo {
            collections(networks: [{network: ${network}, chain: MAINNET}], 
                        pagination: {limit: 8}, 
                        sort: {sortKey: CREATED, sortDirection: ASC},
                        where: {collectionAddresses: "0xc729Ce9bF1030fbb639849a96fA8BBD013680B64"}) 
            {
                nodes {
                    address
                    name
                    symbol
                    totalSupply
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
      .json({ error: "Failed to fetch data from Zora API" });
  }
}
