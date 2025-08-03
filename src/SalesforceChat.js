import { useEffect, useState } from 'react';

const SalesforceChat = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent multiple initializations
    if (window.embeddedservice_bootstrap) {
      console.log('Salesforce Embedded Messaging already initialized');
      return;
    }

    // Define the initEmbeddedMessaging function
    window.initEmbeddedMessaging = function () {
      try {
        window.embeddedservice_bootstrap.settings.language = 'en_US';
        window.embeddedservice_bootstrap.init(
          '00DgL000006OOLt',
          'Web_Chat_Channel',
          'https://orgfarm-0bebac05d5-dev-ed.develop.my.site.com/ESWWebChatChannel1752950521346',
          {
            scrt2URL: 'https://orgfarm-0bebac05d5-dev-ed.develop.my.salesforce-scrt.com',
          }
        );
      } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
        setError('Failed to load chat. Please try again later.');
      }
    };

    // Create and append the script tag
    const script = document.createElement('script');
    script.src = 'https://orgfarm-0bebac05d5-dev-ed.develop.my.site.com/ESWWebChatChannel1752950521346/assets/js/bootstrap.min.js';
    script.async = true;
    script.onload = () => window.initEmbeddedMessaging();
    document.body.appendChild(script);

    // Cleanup: Remove script on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return error ? <div className="alert alert-danger">{error}</div> : null;
};

export default SalesforceChat;