import React from "react";
import { STextarea } from "./Textarea.style";

const Textarea = ({ label, onChange, placeholder, name }) => {
  return (
    <STextarea>
      {label && <label htmlFor=""> {label} </label>}

      <textarea
        className="text-area"
        name={name}
        id=""
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </STextarea>
  );
};

export default Textarea;
