import React from "react";
import { SInput } from "./Input.style";

const Input = ({ label, onChange, value, id, name }) => {
  return (
    <SInput>
      <label htmlFor="">{label}</label>
      <input
        name={name}
        data-id={id}
        onChange={onChange}
        type="text"
        value={value}
      />
    </SInput>
  );
};

export default Input;
