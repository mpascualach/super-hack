import React from "react";
import { IDKitWidget } from "@worldcoin/idkit";

const Captcha = () => {
  return (
    <div>
      Captcha
      <IDKitWidget
        app_id="app_staging_2ae9928993b274332f536538ea33c6bb" // obtained from the Developer Portal
        action="verify_user" // this is your action name from the Developer Portal
        signal="sign" // any arbitrary value the user is committing to, e.g. a vote
        onSuccess={onSuccess}
        credential_types={["orb", "phone"]} // the credentials you want to accept
        enableTelemetry
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </div>
  );
};

export default Captcha;
