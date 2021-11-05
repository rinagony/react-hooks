import React from "react";
import Alert from "./Alert/Alert";
import Main from "./Main";
import { AlertProvider } from "./Alert/AlertContext";

export default function ContextHook() {
  return (
    <AlertProvider>
      {/* we use provider for not mixing dom with functions */}
      <div>
        <Main />
        <Alert />
      </div>
    </AlertProvider>
  );
}
