import { useEffect } from "react";

function SalesforceChat() {
  useEffect(() => {
    // Load the bootstrap script
    const script = document.createElement("script");
    script.src =
      "https://orgfarm-0bebac05d5-dev-ed.develop.my.salesforce-scrt.com/embeddedservice/asyncclient/bootstrap.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize embedded service only after script is loaded
      window.embeddedservice_bootstrapSettings = {
        embeddedServiceConfig: {
          organizationId: "00DgL000006OOLt",
          developerName: "reactApp",
          baseUrl: "https://orgfarm-0bebac05d5-dev-ed.develop.my.salesforce-scrt.com"
        }
      };
      // Call the bootstrap init method
      if (window.embeddedservice_bootstrap) {
        window.embeddedservice_bootstrap.init(
          "https://orgfarm-0bebac05d5-dev-ed.develop.my.salesforce-scrt.com"
        );
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}

export default SalesforceChat;
