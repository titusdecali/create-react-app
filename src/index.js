import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PrivyProvider } from "@privy-io/react-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={process.env.REACT_APP_PRIVY_APP_ID}
      onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      config={{
        embeddedWallets: {
            createOnLogin: 'users-without-wallets' // or 'all-users'
        },
        loginMethods: ["wallet", "email"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://quid.li/assets/quidli-mixed-86c0f0b6.svg",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
