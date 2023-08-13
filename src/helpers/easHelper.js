import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { SignerOrProvider } from "@thirdweb-dev/sdk";
import { useSigner } from "@thirdweb-dev/react";

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

const provider = new ethers.providers.JsonRpcProvider();

async function createOffchainAttestation(recipient, data) {
  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress);

  // Connects an ethers style provider/signingProvider to perform read/write functions.
  // MUST be a signer to do write operations!
  eas.connect(provider);

  const offchain = await eas.getOffchain();

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
  const encodedData = schemaEncoder.encodeData(data);

  // Signer is an ethers.js Signer instance
  const signer = useSigner(); // This might not work outside a React component. Ensure to handle this correctly in your use case.

  const offchainAttestation = await offchain.signOffchainAttestation({
    recipient: recipient,
    expirationTime: 0,
    time: 1671219991,
    revocable: true,
    version: 1,
    nonce: 0,
    schema:
      "0x5cb382b410e9842a93e317a3d778416f026c6782a84ca421ff2f7c53d50351d7",
    refUID:
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    data: encodedData,
  });

  return offchainAttestation;
}
