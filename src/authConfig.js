export const msalConfig = {
  auth: {
    clientId: "f080cab7-92aa-4d94-9ef2-e83a7f2de312",
    authority:
      "https://login.microsoftonline.com/b6cd5b26-a3c2-4494-a857-d0c88a0d4eb4", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: " http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
