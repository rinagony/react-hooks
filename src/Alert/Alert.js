import React from "react";
import { useAlert } from "../Alert/AlertContext";

export default function Alert() {
  const alert = useAlert();

  if (!alert) {
    return null;
  }

  return (
    <div>
      <p>It is very important message</p>
    </div>
  );
}
