import React from "react";
import { useAlertToggle } from "./Alert/AlertContext";

export default function Main() {
   const toggle =  useAlertToggle()
    return (
        <>
            <h4>Hello in exemple Context</h4>
            <button onClick={toggle}>Show alert</button>
        </>
    )
}