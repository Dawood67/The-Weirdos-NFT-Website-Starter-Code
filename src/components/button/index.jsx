import React from "react";
import { Btn } from "./elements";

const Button = ({ text, link }) => {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
};

export default Button;
