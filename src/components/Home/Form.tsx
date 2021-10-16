import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled/macro";
import { B } from "components/styled";
import InputGroup from "./InputGroup";

const inputGroupTypes = [
  { id: 1, labelForToInputId: "destination", labelText: "Destination", inputType: "text" },
  { id: 2, labelForToInputId: "check-in", labelText: "Check in", inputType: "text" },
  { id: 3, labelForToInputId: "check-out", labelText: "Check out", inputType: "text" },
];

function Form() {
  return (
    <B.Form>
      {inputGroupTypes.map((e) => (
        <InputGroup key={e.id} {...e} />
      ))}
    </B.Form>
  );
}

export default Form;
