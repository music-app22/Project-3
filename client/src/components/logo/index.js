import React from "react";
import "./style.css";
import LogoPic from "./logo.png"

export function Logo() {
    return (
        <div>
            <img className="logo" src={LogoPic} />
        </div>
    );
}

export default Logo
