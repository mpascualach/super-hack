import React, { useEffect } from "react";
import Step4 from "../Steps/Step4";
import { useSigner } from "@thirdweb-dev/react";

import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);
console.log(eas);

const Pay = () => {
  const signer = useSigner();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Assuming eas is a global object or available somehow
  //     const offchain = await eas.getOffchain();
  //     const schemaEncoder = new SchemaEncoder(
  //       "uint256 eventId, uint8 voteIndex"
  //     );
  //     const encodedData = schemaEncoder.encodeData([
  //       { name: "eventId", value: 1, type: "uint256" },
  //       { name: "voteIndex", value: 1, type: "uint8" },
  //     ]);

  //     const offchainAttestation = await offchain.signOffchainAttestation(
  //       {
  //         recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
  //         // Unix timestamp of when attestation expires. (0 for no expiration)
  //         expirationTime: 0,
  //         // Unix timestamp of current time
  //         time: 1671219636,
  //         revocable: true, // Be aware that if your schema is not revocable, this MUST be false
  //         version: 1,
  //         nonce: 0,
  //         schema:
  //           "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
  //         refUID:
  //           "0x0000000000000000000000000000000000000000000000000000000000000000",
  //         data: encodedData,
  //       },
  //       signer
  //     );
  //   };

  //   fetchData();
  // }, [signer]);

  const signMessage = async () => {
    const message = "Attestation request for template creation";
    const signature = await signer.signMessage(message);
    console.log(signature);
  };

  return (
    <div className="flex flex-row mt-[58px] gap-[150px]">
      <div className="flex flex-col gap-[24px]">
        <p className="text-[28px]">Attestation</p>
        <div
          onClick={signMessage}
          className="flex flex-row justify-between items-center w-[540px] h-[110px] rounded-[10px] bg-[#f8f8f8] p-[24px] cursor-pointer"
        >
          <p className="text-[24px] w-[239px] text-[#699BF7]">
            Complete attestion
          </p>
          <img src="/images/check.svg" alt="" />
        </div>
        <p className="text-[28px] mt-[8px]">Invoice</p>

        <div className="relative flex flex-col gap-[24px] bg-[#f8f8f8] pt-[32px] px-[24px] rounded-[15px]">
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">AI Agent</span>
            <span className="text-black text-[20px]">$10</span>
          </div>
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">Template 1</span>
            <span className="text-black text-[20px]">$5</span>
          </div>
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">Template 2</span>
            <span className="text-black text-[20px]">$5</span>
          </div>
          <div className="flex flex-row w-[492] justify-between mb-[108px]">
            <span className="text-black text-[20px]">Total</span>
            <span className="text-black text-[20px]">$20</span>
          </div>
          <div className="absolute flex flex-row items-center justify-center bottom-0 left-0 right-0 w-full h-[60px] bg-[#699BF7] font-bold text-white text-[24px] rounded-[15px] cursor-pointer">
            PAY
          </div>
        </div>
      </div>
      <div className="mt-[58px]">
        <Step4 />
      </div>
    </div>
  );
};

export default Pay;
