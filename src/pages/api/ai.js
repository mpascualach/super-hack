export default async function handler(req, res) {
  try {
    const { query } = req.body;

    // Log the request data
    console.log("Request data:", query);

    const API_KEY = process.env.OPENAI_API_KEY;
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an AI assistant for blockchain ecosystem, your job is to process the user query and
            check if it falls or is related to the query description in key1 of list of objects given below if it
            does then return key2 if it doesn't then instead of key2 return none.

            List:[
            {"Mint a AI generated NFT or buy a NFT ":mintNFT"},
            {"Help with creating a NFT collection":"smartContract"},
            {"Guide to deploy with thirdweb ":"guide"},
            ]

            Remember to return the key2 or none for key`,
          },
          { role: "user", content: query },
        ],
      }),
    };

    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    const generatedMessage = data.choices[0].message.content;

    if (generatedMessage === "None") {
      // Make recursive call without the system prompt
      const recursiveResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: query }],
        }),
      });

      const recursiveData = await recursiveResponse.json();
      const recursiveGeneratedMessage =
        recursiveData.choices[0].message.content;

      res.status(200).json({ message: recursiveGeneratedMessage });
    } else {
      res.status(200).json({ message: generatedMessage });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }

  //   setTimeout(() => {
  //     res.status(200).json({ message: "smartContract" });
  //   }, 3000);
}
