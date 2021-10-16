import React from "react";

interface InputGroupProps {
  inputType: string;
  labelText: string;
  labelForToInputId: string;
}

function InputGroup({ labelForToInputId, labelText, inputType }: Partial<InputGroupProps>) {
  return (
    <div className="input-group">
      <label htmlFor={labelForToInputId}>{labelText}</label>
      <input type={inputType} id={labelForToInputId} />
    </div>
  );
}

export default InputGroup;
