import { useEffect } from "react";

const SalesforceChat = () => {
  useEffect(() => {
    // Prevent script from being added multiple times
    if (document.getElementById("salesforce-chat-script")) return;

    // Add the meta tag for viewport if not already there
    if (!document.querySelector("meta[name='viewport']")) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1, minimum-scale=1";
      document.head.appendChild(meta);
    }

    // Init function
    window.initEmbeddedMessaging = function () {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00DgL000006OOLt",
          "reactChat",
          "https://orgfarm-0bebac05d5-dev-ed.develop.my.site.com/ESWreactChat1754229088269",
          {
            scrt2URL: "https://orgfarm-0bebac05d5-dev-ed.develop.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error("Error loading Embedded Messaging: ", err);
      }
    };

    // Load the external Salesforce bootstrap script
    const script = document.createElement("script");
    script.src = "https://orgfarm-0bebac05d5-dev-ed.develop.my.site.com/ESWreactChat1754229088269/assets/js/bootstrap.min.js";
    script.id = "salesforce-chat-script";
    script.type = "text/javascript";
    script.onload = () => {
      window.initEmbeddedMessaging();
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default SalesforceChat;
